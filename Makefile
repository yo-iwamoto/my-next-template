.PHONY: init
init:
	mise install
	pnpm i
	cp .env.example .env
	pnpm prisma:generate
