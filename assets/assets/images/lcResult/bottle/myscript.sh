#!/opt/homebrew/bin/bash

declare -A fileMap

# 파일 이름 매핑
fileMap=(
    ["A LA ROSE.png"]="a_la_rose.png"
    ["BACCARAT ROUGE 540.png"]="baccarat_rouge_540.png"
    ["BERGAMOTE 22.png"]="bergamote_22.png"
    ["BLACK SAFFRON.png"]="black_saffron.png"
    ["BLANCHE.png"]="blanche.png"
    ["EAU CAPITALE.png"]="eau_capitale.png"
    ["EN PASSANT.png"]="en_passant.png"
    ["FLEUR DE PEAU.png"]="fleur_de_peau.png"
    ["FLOWER MARKET.png"]="flower_market.png"
    ["FRESIA.png"]="fresia.png"
    ["GARDEZ MOI.png"]="gardez_moi.png"
    ["GOOD GIRL GONE BAD.png"]="good_girl_gone_bad.png"
    ["GYPSY WATER.png"]="gypsy_water.png"
    ["IRIS DE MALTE.png"]="iris_de_malte.png"
    ["JUST A ROSE.png"]="just_a_rose.png"
    ["LA TULIPE.png"]="la_tulipe.png"
    ["LAZY SUNDAY MORNING.png"]="lazy_sunday_morning.png"
    ["LICHEN D'ECOSE.png"]="lichen_d'ecose.png"
    ["LOST CHERRY.png"]="lost_cherry.png"
    ["LUNA.png"]="luna.png"
    ["MIRTO DI PANAREA.png"]="mirto_di_panarea.png"
    ["MISS DIOR BLOOMING BOUQUET.png"]="miss_dior_blooming_bouquet.png"
    ["MOJAVE GHOST.png"]="mojave_ghost.png"
    ["MOONLIGHT IN HEAVEN.png"]="moonlight_in_heaven.png"
    ["NO.5.png"]="no.5.png"
    ["OFRESIA.png"]="ofresia.png"
    ["ORPHEON.png"]="orpheon.png"
    ["OSMANTHUS.png"]="osmanthus.png"
    ["PORTRAIT OF A LADY.png"]="portrait_of_a_lady.png"
    ["ROSA GARDENIA.png"]="rosa_gardenia.png"
    ["ROSE DE DAMAS.png"]="rose_de_damas.png"
    ["TACIT.png"]="tacit.png"
    ["TOUCHE FINALE.png"]="touche_finale.png"
    ["TUBEROSE DU MEXIQUE.png"]="tuberose_du_mexique.png"
    ["WHITE SUEDE.png"]="white_suede.png"
    ["YOUGH AT HEART.png"]="yough_at_heart.png"
)


# 디렉토리에서 모든 파일 순회
for oldFile in *; do
 		# 현재 스크립트 파일을 건너뛰기
    if [[ "$oldFile" == "myscript.sh" ]]; then
        continue
    fi

    # 매핑에서 새 파일 이름 찾기
    newFile="${fileMap["$oldFile"]}"

    # 새 파일 이름이 매핑에서 발견되면 이름 변경
    if [ ! -z "$newFile" ]; then
        mv "$oldFile" "$newFile"
				echo "Renamed '$oldFile' to '$newFile'" >> rename_log.txt
    fi
done
