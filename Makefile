.PHONY: init
init:
	nodenv install --skip-existing
	corepack enable
	corepack prepare --activate
	nodenv rehash
	pnpm prisma:generate
