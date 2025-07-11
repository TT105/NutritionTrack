// 食材の栄養データ（100gあたり）
const foodData = {
   "にんじん": { cal: 37, protein: 0.6, fat: 0.1, carb: 8.7 },
  "ごはん (精白米, 炊飯後)": { cal: 156, protein: 2.5, fat: 0.3, carb: 34.2 },
  "鶏むね肉 (皮なし, 生)": { cal: 108, protein: 23.0, fat: 1.9, carb: 0.0 },
  "木綿豆腐": { cal: 72, protein: 6.6, fat: 4.2, carb: 2.0 },
  "トマト": { cal: 19, protein: 0.7, fat: 0.1, carb: 4.7 },
  "バナナ": { cal: 93, protein: 1.1, fat: 0.2, carb: 22.5 },
  "りんご": { cal: 54, protein: 0.2, fat: 0.2, carb: 14.6 },
  "たまご (鶏卵, 全卵)": { cal: 141, protein: 12.3, fat: 9.9, carb: 0.3 },
  "サーモン (生)": { cal: 133, protein: 22.3, fat: 4.7, carb: 0.1 },
  "ブロッコリー (生)": { cal: 33, protein: 4.3, fat: 0.5, carb: 5.1 },
  "じゃがいも": { cal: 76, protein: 1.7, fat: 0.1, carb: 17.6 },
  "ほうれん草 (ゆで)": { cal: 26, protein: 3.5, fat: 0.7, carb: 4.6 },
  "牛乳 (普通)": { cal: 61, protein: 3.3, fat: 3.8, carb: 4.8 },
  "食パン (6枚切り)": { cal: 264, protein: 8.9, fat: 4.4, carb: 46.7 },
  "豚バラ肉 (生)": { cal: 366, protein: 14.4, fat: 34.6, carb: 0.1 },
    "牛ロース (生)": { cal: 220, protein: 19.9, fat: 15.3, carb: 0.1 },
  "豚ロース (生)": { cal: 240, protein: 19.3, fat: 17.1, carb: 0.1 },
  "キャベツ (生)": { cal: 23, protein: 1.3, fat: 0.2, carb: 5.2 },
  "きゅうり": { cal: 14, protein: 1.0, fat: 0.1, carb: 3.0 },
  "玉ねぎ": { cal: 37, protein: 1.0, fat: 0.1, carb: 8.7 },
  "いわし (生)": { cal: 216, protein: 26.6, fat: 13.0, carb: 0.1 },
  "まぐろ (赤身, 生)": { cal: 115, protein: 26.4, fat: 1.4, carb: 0.1 },
  "納豆": { cal: 190, protein: 16.5, fat: 10.0, carb: 10.6 },
  "かぼちゃ": { cal: 91, protein: 1.6, fat: 0.3, carb: 20.6 },
 "さつまいも":{ cal: 132, protein: 1.2, fat: 0.2, carb: 31.5 },
　"えび": { cal: 82, protein: 19.1, fat: 0.6, carb: 0.1 },
  "いか": { cal: 76, protein: 17.9, fat: 0.8, carb: 0.1 },
  "味噌": { cal: 190, protein: 12.5, fat: 6.0, carb: 25.0 },
  "醤油": { cal: 71, protein: 7.8, fat: 0.1, carb: 10.1 },
  "米酢": { cal: 19, protein: 0.1, fat: 0.0, carb: 4.8 },
  "絹ごし豆腐": { cal: 56, protein: 4.9, fat: 3.0, carb: 2.8 },
  "枝豆": { cal: 135, protein: 11.5, fat: 6.3, carb: 11.3 },
  "しいたけ (生)": { cal: 18, protein: 3.0, fat: 0.4, carb: 4.2 },
  "たら (生)": { cal: 77, protein: 17.6, fat: 0.7, carb: 0.1 },
  "豚肩ロース (生)": { cal: 253, protein: 19.4, fat: 18.5, carb: 0.1 },
  "いちご": { cal: 34, protein: 0.9, fat: 0.1, carb: 8.5 },
  "メロン": { cal: 40, protein: 0.9, fat: 0.1, carb: 9.8 },
  "ぶどう": { cal: 59, protein: 0.4, fat: 0.2, carb: 14.8 },
  "もも": { cal: 40, protein: 0.6, fat: 0.1, carb: 10.0 },
  "キウイ": { cal: 53, protein: 1.0, fat: 0.1, carb: 13.0 },
  "ピーマン": { cal: 28, protein: 1.0, fat: 0.1, carb: 6.6 },
  "大根": { cal: 18, protein: 0.6, fat: 0.1, carb: 4.1 },
  "しめじ": { cal: 23, protein: 2.7, fat: 0.5, carb: 5.3 },
  "牛肉 (ヒレ, 生)": { cal: 133, protein: 21.0, fat: 5.6, carb: 0.1 },
  "さば (生)": { cal: 200, protein: 20.7, fat: 12.1, carb: 0.1 },
  "ホタテ (生)": { cal: 97, protein: 16.2, fat: 0.9, carb: 3.3 },
  "プレーンヨーグルト": { cal: 62, protein: 3.6, fat: 3.0, carb: 4.9 },
  "チェダーチーズ": { cal: 407, protein: 25.4, fat: 33.8, carb: 0.1 },
  "バター": { cal: 745, protein: 0.6, fat: 81.0, carb: 0.1 },
  "うどん (ゆで)": { cal: 105, protein: 3.2, fat: 0.4, carb: 22.0 },
  "そば (ゆで)": { cal: 113, protein: 5.0, fat: 0.8, carb: 23.5 },
  "レンズ豆 (ゆで)": { cal: 110, protein: 9.0, fat: 0.4, carb: 19.8 },
  "オリーブオイル": { cal: 896, protein: 0.0, fat: 99.8, carb: 0.0 },
  "砂糖": { cal: 384, protein: 0.0, fat: 0.0, carb: 99.2 },
  "はちみつ": { cal: 294, protein: 0.3, fat: 0.0, carb: 79.7 },
　 "いちご": { cal: 34, protein: 0.9, fat: 0.1, carb: 8.5 },
  "メロン": { cal: 40, protein: 0.9, fat: 0.1, carb: 9.8 },
  "ぶどう": { cal: 59, protein: 0.4, fat: 0.2, carb: 14.8 },
  "もも": { cal: 40, protein: 0.6, fat: 0.1, carb: 10.0 },
  "キウイ": { cal: 53, protein: 1.0, fat: 0.1, carb: 13.0 },
  "ピーマン": { cal: 28, protein: 1.0, fat: 0.1, carb: 6.6 },
  "大根": { cal: 18, protein: 0.6, fat: 0.1, carb: 4.1 },
  "しめじ": { cal: 23, protein: 2.7, fat: 0.5, carb: 5.3 },
  "牛肉 (ヒレ, 生)": { cal: 133, protein: 21.0, fat: 5.6, carb: 0.1 },
  "さば (生)": { cal: 200, protein: 20.7, fat: 12.1, carb: 0.1 },
  "ホタテ (生)": { cal: 97, protein: 16.2, fat: 0.9, carb: 3.3 },
  "プレーンヨーグルト": { cal: 62, protein: 3.6, fat: 3.0, carb: 4.9 },
  "チェダーチーズ": { cal: 407, protein: 25.4, fat: 33.8, carb: 0.1 },
  "バター": { cal: 745, protein: 0.6, fat: 81.0, carb: 0.1 },
  "うどん (ゆで)": { cal: 105, protein: 3.2, fat: 0.4, carb: 22.0 },
  "そば (ゆで)": { cal: 113, protein: 5.0, fat: 0.8, carb: 23.5 },
  "レンズ豆 (ゆで)": { cal: 110, protein: 9.0, fat: 0.4, carb: 19.8 },
  "オリーブオイル": { cal: 896, protein: 0.0, fat: 99.8, carb: 0.0 },
  "砂糖": { cal: 384, protein: 0.0, fat: 0.0, carb: 99.2 },
  "はちみつ": { cal: 294, protein: 0.3, fat: 0.0, carb: 79.7 },
　"とうもろこし": { cal: 86, protein: 3.3, fat: 1.2, carb: 19.0 },
  "ほうれん草 ": { cal: 20, protein: 2.2, fat: 0.4, carb: 3.6 },
  "レタス": { cal: 12, protein: 0.6, fat: 0.1, carb: 2.6 },
  "にんにく": { cal: 139, protein: 6.3, fat: 0.5, carb: 30.6 },
  "しょうが": { cal: 30, protein: 0.6, fat: 0.1, carb: 7.3 },
  "たらこ": { cal: 140, protein: 24.0, fat: 4.4, carb: 1.8 },
  "うなぎ ": { cal: 293, protein: 23.0, fat: 21.4, carb: 4.2 },
  "まぐろ ": { cal: 340, protein: 20.0, fat: 28.0, carb: 0.1 },
  "ソーセージ": { cal: 300, protein: 13.0, fat: 26.0, carb: 5.0 },
  "ツナ缶 (オイル漬け)": { cal: 280, protein: 23.0, fat: 20.0, carb: 0.1 },
  "コーンフレーク": { cal: 378, protein: 8.0, fat: 1.0, carb: 85.0 },
  "オートミール": { cal: 379, protein: 13.0, fat: 6.0, carb: 68.0 },
  "アーモンド": { cal: 608, protein: 20.0, fat: 51.8, carb: 20.8 },
  "くるみ": { cal: 674, protein: 14.6, fat: 68.8, carb: 11.7 },
  "落花生": { cal: 585, protein: 25.8, fat: 49.2, carb: 16.1 },
  "高カカオチョコレート": { cal: 546, protein: 8.8, fat: 38.0, carb: 49.0 },
  "せんべい": { cal: 370, protein: 6.0, fat: 0.5, carb: 85.0 },
  "もち": { cal: 235, protein: 3.7, fat: 0.5, carb: 53.4 },
  "きなこ": { cal: 430, protein: 36.7, fat: 20.0, carb: 30.3 },
  "みかん": { cal: 45, protein: 0.7, fat: 0.1, carb: 11.2 }
　"鶏もも肉 (皮つき, 生)": { cal: 204, protein: 16.2, fat: 14.2, carb: 0.1 },
  "豚ロース (トンカツ用, 生)": { cal: 263, protein: 19.3, fat: 19.2, carb: 0.1 },
  "茹でえび": { cal: 92, protein: 20.6, fat: 0.7, carb: 0.1 },
  "ツナ缶 (水煮)": { cal: 105, protein: 24.0, fat: 0.7, carb: 0.1 },
  "味噌汁": { cal: 35, protein: 2.5, fat: 1.0, carb: 4.0 },
  "わかめ": { cal: 16, protein: 1.0, fat: 0.1, carb: 3.6 },
  "こんにゃく": { cal: 5, protein: 0.1, fat: 0.0, carb: 2.3 },
  "ゆでキャベツ": { cal: 20, protein: 1.0, fat: 0.1, carb: 4.5 },
  "白菜": { cal: 14, protein: 0.8, fat: 0.1, carb: 3.1 },
  "長ねぎ": { cal: 33, protein: 1.0, fat: 0.1, carb: 7.7 },
  "里芋": { cal: 58, protein: 1.3, fat: 0.1, carb: 14.5 },
  "豆乳": { cal: 47, protein: 3.6, fat: 2.0, carb: 3.1 },
  "ブラックコーヒー": { cal: 4, protein: 0.2, fat: 0.0, carb: 0.7 },
  "コーラ": { cal: 42, protein: 0.0, fat: 0.0, carb: 10.6 },
  "ビール": { cal: 40, protein: 0.3, fat: 0.0, carb: 3.1 },
  "パン粉": { cal: 365, protein: 10.0, fat: 2.0, carb: 75.0 },
  "ごま油": { cal: 896, protein: 0.0, fat: 99.8, carb: 0.0 },
  "ケチャップ": { cal: 105, protein: 1.3, fat: 0.1, carb: 25.0 },
  "マヨネーズ": { cal: 697, protein: 1.5, fat: 76.0, carb: 3.6 },
　"牛ひき肉": { cal: 250, protein: 17.0, fat: 20.0, carb: 0.1 },
  "豚ひき肉": { cal: 300, protein: 18.0, fat: 25.0, carb: 0.1 },
  "あさり": { cal: 30, protein: 6.0, fat: 0.5, carb: 1.5 },
  "かき": { cal: 60, protein: 6.6, fat: 1.6, carb: 5.0 },
  "鶏レバー": { cal: 111, protein: 18.9, fat: 3.1, carb: 1.3 },
  "アスパラガス": { cal: 22, protein: 2.2, fat: 0.2, carb: 4.0 },
  "舞茸": { cal: 22, protein: 2.2, fat: 0.5, carb: 4.6 },
  "油揚げ": { cal: 386, protein: 23.4, fat: 32.5, carb: 1.9 },
  "ラーメン (乾麺)": { cal: 370, protein: 10.0, fat: 2.0, carb: 75.0 },
  "パスタ (乾麺)": { cal: 356, protein: 12.0, fat: 1.5, carb: 74.0 },
  "玄米 (炊飯後)": { cal: 165, protein: 2.8, fat: 1.0, carb: 35.6 },
  "焼き芋": { cal: 163, protein: 1.4, fat: 0.3, carb: 37.0 },
  "セロリ": { cal: 15, protein: 0.6, fat: 0.1, carb: 3.0 },
  "れんこん": { cal: 66, protein: 1.9, fat: 0.1, carb: 16.0 },
  "かつお": { cal: 108, protein: 25.8, fat: 0.5, carb: 0.1 },
  "日本酒": { cal: 103, protein: 0.3, fat: 0.0, carb: 3.6 },
  "赤ワイン": { cal: 73, protein: 0.1, fat: 0.1, carb: 1.5 },
  "焼酎": { cal: 146, protein: 0.0, fat: 0.0, carb: 0.0 },
　 "グレープフルーツ": { cal: 38, protein: 0.9, fat: 0.1, carb: 9.6 },
  "レモン": { cal: 44, protein: 0.9, fat: 0.1, carb: 10.4 },
  "アボカド": { cal: 187, protein: 2.5, fat: 18.0, carb: 6.7 },
  "いんげん": { cal: 33, protein: 2.4, fat: 0.2, carb: 7.6 },
  "栗": { cal: 164, protein: 2.8, fat: 1.0, carb: 37.0 },
  "干し椎茸": { cal: 182, protein: 21.6, fat: 3.3, carb: 58.8 },
  "そば (乾麺)": { cal: 344, protein: 12.0, fat: 1.9, carb: 71.0 },
  "うどん (乾麺)": { cal: 336, protein: 8.0, fat: 1.0, carb: 74.0 },
  "ひえ": { cal: 358, protein: 10.6, fat: 3.6, carb: 71.5 },
  "焼き豆腐": { cal: 92, protein: 8.0, fat: 5.0, carb: 3.5 },
  "米味噌": { cal: 198, protein: 12.5, fat: 6.0, carb: 25.0 },
  "黒ごま": { cal: 597, protein: 20.3, fat: 54.2, carb: 17.6 },
  "白ごま": { cal: 597, protein: 20.3, fat: 54.2, carb: 17.6 },
  "ねりごま": { cal: 650, protein: 18.0, fat: 60.0, carb: 13.0 },
  "鶏ささみ": { cal: 105, protein: 23.9, fat: 0.8, carb: 0.0 },
  "豚ヒレ肉": { cal: 129, protein: 22.2, fat: 3.7, carb: 0.1 },
};

let totalNutrition = { cal: 0, protein: 0, fat: 0, carb: 0 };

const form = document.getElementById("food-form");
const foodList = document.getElementById("food-list");
const nutritionSummary = document.getElementById("nutrition-summary");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("food-name").value.trim();
    const weight = Number(document.getElementById("food-weight").value);

    if (!foodData[name]) {
        alert("この食材はデータベースにありません。");
        return;
    }
    if (weight <= 0) {
        alert("量は1以上の数値を入力してください。");
        return;
    }

    // 栄養素計算
    const nutrition = foodData[name];
    const factor = weight / 100;

    totalNutrition.cal += nutrition.cal * factor;
    totalNutrition.protein += nutrition.protein * factor;
    totalNutrition.fat += nutrition.fat * factor;
    totalNutrition.carb += nutrition.carb * factor;

    // リストに追加
    const li = document.createElement("li");
    li.textContent = `${name}：${weight}g`;
    foodList.appendChild(li);

    updateSummary();

    // フォームリセット
    form.reset();
});

function updateSummary() {
    nutritionSummary.textContent = `カロリー: ${totalNutrition.cal.toFixed(1)} kcal | たんぱく質: ${totalNutrition.protein.toFixed(1)} g | 脂質: ${totalNutrition.fat.toFixed(1)} g | 炭水化物: ${totalNutrition.carb.toFixed(1)} g`;
}
