.PHONY: init
init:
	nodenv install --skip-existing
	nodenv rehash
	pnpm i
	pnpm prisma:generate
