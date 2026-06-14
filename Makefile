VERSION=$(shell jq -r .version package.json)
DATE=$(shell date +%F)

all: index.html

clean:
	rm -f index.html

index.html: demo/index.md demo/template.html Makefile
	pandoc --toc -s --number-sections --number-offset=0 --css src/reset.css --css src/index.css -Vversion=v$(VERSION) -Vdate=$(DATE) -i $< -o $@ --template=demo/template.html

.PHONY: all clean
