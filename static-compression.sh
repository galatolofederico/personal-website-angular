#! /bin/bash
filetypes=( "*.html" "*.css" "*.js" )
directory="/personal-website/dist/personal-site/"
min_size=1024

for i in "${filetypes[@]}"
do
   find $directory -iname "$i" -print0 |
   while IFS= read -r -d '' file; do 
      if [ "$(stat -c%s "$file")" -gt $min_size ]; then
         echo "Compressing $file"
         gzip -9 -f -c "$file" > "$file.gz";
      fi
   done
done