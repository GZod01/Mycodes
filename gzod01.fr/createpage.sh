#!/usr/bin/sh
originaltitle=$1
title= ${originaltitle//"-"/" "}
cat > $1 <<-END
    This is line one.
    This is line two.
    This is line three.
END
