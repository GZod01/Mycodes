#!/usr/bin/sh
# the distant script (replace blogname with the blog name)
blogpath="/path/to/blog"
postspath="$blogpath/path/to/posts"
filepath=$1
filename=$(basename $filepath)
cd $blogpath
mv $filepath $postspath/$filename