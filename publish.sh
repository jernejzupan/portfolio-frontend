# usage: ./publish.sh "commit message"
npm run build
git add dist -f
git reset */.DS_Store
git commit -m "DEPLOY $1"
git push origin main
git subtree push --prefix dist origin gh-pages