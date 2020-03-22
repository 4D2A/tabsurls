#!/bin/bash

cd $(dirname $0)/tabsurls/ && zip -r -FS ../tabsurls.zip * --exclude .*
