# To deploy the website, setup your keys:
#
# 	sudo pip install awscli
# 	aws configure
#
# Then run:
# 	make deploy

test:
	jekyll serve

clean:
	-rm -rf _site

deploy:
	jekyll build
	aws s3 sync _site s3://seanssmith.com \
		--exclude "*.DS_STORE" \
		--delete

