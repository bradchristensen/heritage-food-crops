#!/usr/bin/env sh

mkdir build
mv * build
tar -czf heritagefoodcrops_org_nz.tgz build
export SSHPASS=$DEPLOY_PASS
sshpass -e scp heritagefoodcrops_org_nz.tgz $DEPLOY_USER@$DEPLOY_HOST:$DEPLOY_PATH/packages
sshpass -e ssh $DEPLOY_USER@$DEPLOY_HOST $DEPLOY_PATH/scripts/deployHeritageFoodCrops.sh
