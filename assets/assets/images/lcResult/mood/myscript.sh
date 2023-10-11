#!/opt/homebrew/bin/bash

declare -A fileMap

# 파일 이름 매핑
fileMap=(
    ["봄향기소녀1.png"]="spring_girl1.png"
    ["봄향기소녀2.png"]="spring_girl2.png"
    ["봄향기소녀3.png"]="spring_girl3.png"
    ["봄향기소녀4.png"]="spring_girl4.png"
    ["봄향기소녀5.png"]="spring_girl5.png"
    ["샹들리에여인1.png"]="chandelier_woman1.png"
    ["샹들리에여인2.png"]="chandelier_woman2.png"
    ["샹들리에여인3.png"]="chandelier_woman3.png"
    ["샹들리에여인4.png"]="chandelier_woman4.png"
    ["샹들리에여인5.png"]="chandelier_woman5.png"
    ["스포트라이트1.png"]="spotlight1.png"
    ["스포트라이트2.png"]="spotlight2.png"
    ["스포트라이트3.png"]="spotlight3.png"
    ["스포트라이트4.png"]="spotlight4.png"
    ["스포트라이트5.png"]="spotlight5.png"
    ["연못의천사1.png"]="angel_of_pond1.png"
    ["연못의천사2.png"]="angel_of_pond2.png"
    ["연못의천사3.png"]="angel_of_pond3.png"
    ["연못의천사4.png"]="angel_of_pond4.png"
    ["연못의천사5.png"]="angel_of_pond5.png"
    ["커리어우먼1.png"]="career_woman1.png"
    ["커리어우먼2.png"]="career_woman2.png"
    ["커리어우먼3.png"]="career_woman3.png"
    ["커리어우먼4.png"]="career_woman4.png"
    ["커리어우먼5.png"]="career_woman5.png"
    ["피크닉소녀1.png"]="picnic_girl1.png"
    ["피크닉소녀2.png"]="picnic_girl2.png"
    ["피크닉소녀3.png"]="picnic_girl3.png"
    ["피크닉소녀4.png"]="picnic_girl4.png"
    ["피크닉소녀5.png"]="picnic_girl5.png"
)

# debug
echo "script start"

# 디렉토리에서 모든 파일 순회
for oldFile in *; do
 		# 현재 스크립트 파일을 건너뛰기
    if [[ "$oldFile" == "myscript.sh" ]]; then
        continue
    fi

    # 매핑에서 새 파일 이름 찾기
    newFile="${fileMap["$oldFile"]}"
		echo "$oldFile -> $newFile"

    # 새 파일 이름이 매핑에서 발견되면 이름 변경
    if [ ! -z "$newFile" ]; then
        mv "$oldFile" "$newFile"
				echo "Renamed '$oldFile' to '$newFile'" >> rename_log.txt
    fi
done
