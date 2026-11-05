.PHONY: all install serve build preview check clean

all: build

node_modules: package.json package-lock.json
	npm install
	@touch node_modules

install: node_modules

serve: node_modules
	npm run dev

build: node_modules
	npm run build

preview: build
	npm run preview

check: node_modules
	npm run check

clean:
	rm -rf dist .astro
