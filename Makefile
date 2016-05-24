ARGS = $(shell for filename in `find build/js -name '*.js'`; do echo $$filename build/ts`echo $$filename|rev|cut -c 3-|rev|cut -c 9-`d.ts; done;)

build-js:
	if [ ! -e build ]; then mkdir build; fi
	if [ ! -e build/js ]; then mkdir build/js; fi
	rm -rf build/js/*
	protoc --js_out=import_style=commonjs:build/js proto/*.proto

build-tsd:
	if [ ! -e build/js ]; then echo "run build-js first"; exit; fi
	if [ ! -e build/ts ]; then mkdir build/ts; fi
	rm -rf build/ts/*
	echo ${ARGS};
	node typescript-closure-tools/definition-generator/src/main.js ${ARGS}

install:
	git clone git@github.com:fivetran/typescript-closure-tools.git
	cd typescript-closure-tools; git submodule update --init; npm install
