import { useRouter } from "next/navigation";
import { useCallback, useTransition } from "react";
// import { useToast } from "@/components/ui/use-toast";
import type { ActionOkResult, ServerActionResult } from "./action-factory";

type Options<T> = {
  serverActionFn: (formData: FormData) => ServerActionResult<T>;
  /** @default '成功しました' */
  successToastMessage?: string;
  onSuccess?: (result: ActionOkResult<T>) => void;
  onError?: () => void;
  hiddenFields?: { [key: string]: string | undefined };
};

export function useServerAction<T>({
  serverActionFn,
  // successToastMessage = "成功しました",
  onSuccess,
  onError,
  hiddenFields = {},
}: Options<T>) {
  const router = useRouter();
  // const { toast } = useToast();
  const [isPending, startTransition] = useTransition();

  const action = useCallback(
    (formData: FormData) => {
      for (const [key, value] of Object.entries(hiddenFields ?? {})) {
        if (value === undefined) continue;

        formData.set(key, value);
      }

      startTransition(async () => {
        const result = await serverActionFn(formData);
        if (!result.success) {
          // toast({
          //   title: "エラー",
          //   description: result.message,
          //   variant: "destructive",
          // });
          onError?.();
          return;
        }

        // toast({ title: successToastMessage });
        router.refresh();
        onSuccess?.(result);
      });
    },
    [
      onError,
      onSuccess,
      router,
      serverActionFn,
      hiddenFields,
      //  toast
    ],
  );

  return [action, isPending] as const;
}
