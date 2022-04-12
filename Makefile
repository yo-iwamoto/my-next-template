.PHONY: build-dev
build-dev:
	docker-compose -f docker/dev/docker-compose.yml build

.PHONY: build-dev-no-cache
build-dev-no-cache:
	docker-compose -f docker/dev/docker-compose.yml build --no-cache

.PHONY: up-dev
up-dev:
	docker-compose -f docker/dev/docker-compose.yml up

.PHONY: up-dev-d
up-dev-d:
	docker-compose -f docker/dev/docker-compose.yml up -d

.PHONY: down-dev
down-dev:
	docker-compose -f docker/dev/docker-compose.yml down

.PHONY: build-production
build-production:
	docker-compose -f docker/production/docker-compose.yml build

.PHONY: build-production-no-cache
build-production-no-cache:
	docker-compose -f docker/production/docker-compose.yml build --no-cache

.PHONY: up-production
up-production:
	docker-compose -f docker/production/docker-compose.yml up

.PHONY: up-production-d
up-production-d:
	docker-compose -f docker/production/docker-compose.yml up -d

.PHONY: down-production
down-production:
	docker-compose -f docker/production/docker-compose.yml down
