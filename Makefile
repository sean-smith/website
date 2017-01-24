# To deploy the website, setup your keys:
#
# 	sudo pip install awscli
# 	aws configure
#
# Then run:
# 	make deploy

clean:
	-rm -rf _site


deploy:
	aws s3 sync ../sean-smith.github.io s3://seanssmith.com \
		--exclude ".git/*" \
		--exclude ".gitignore" \
		--exclude "*.DS_STORE" \
		--exclude "Makefile" \
		--exclude "_site" \
		--delete

