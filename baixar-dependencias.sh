#!/usr/bin/env bash

BOOTSTRAP_DIST_VERSION='5.3.8'
BDV=$BOOTSTRAP_DIST_VERSION

BOOTSTRAP_DIST_URL="https://github.com/twbs/bootstrap/releases/download/v$BDV/bootstrap-$BDV-dist.zip"
BDU=$BOOTSTRAP_DIST_URL

BOOTSTRAP_DIST_TMP="/tmp/bootstrap-$BDV-dist.zip"
BDT=$BOOTSTRAP_DIST_TMP

curl -L -o $BDT $BDU
files_count=$(unzip -l $BDT | grep -v "/$" | wc -l)
unzip $BDT -d ./bootstrap/ | pv -l -s $files_count > /dev/null
rm $BDT

BOOTSTRAP_ICONS_VERSION='1.13.1'
BIV=$BOOTSTRAP_ICONS_VERSION

BOOTSTRAP_ICONS_URL="https://github.com/twbs/icons/releases/download/v$BIV/bootstrap-icons-$BIV.zip"
BIU=$BOOTSTRAP_ICONS_URL

BOOTSTRAP_ICONS_TMP="/tmp/bootstrap-$BIV-icons.zip"
BIT=$BOOTSTRAP_ICONS_TMP

curl -L -o $BIT $BIU
files_count=$(unzip -l $BIT | grep -v "/$" | wc -l)
unzip $BIT -d ./abc/ | pv -l -s $files_count > /dev/null
mkdir -p ./icones/bootstrap/
cp -r "./bootstrap/bootstrap-icons-$BIV" "./icones/bootstrap-icons-$BIV"
rm $BIT
