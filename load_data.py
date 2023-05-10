from sqlalchemy.orm import Session

from crud import create_hiragana
from models import Hiragana


def load_initial(db: Session):
    create_hiragana(db, Hiragana(hiragana="あ", romaji="a"))
    create_hiragana(db, Hiragana(hiragana="い", romaji="i"))
    create_hiragana(db, Hiragana(hiragana="う", romaji="u"))
    create_hiragana(db, Hiragana(hiragana="え", romaji="e"))
    create_hiragana(db, Hiragana(hiragana="お", romaji="o"))
    create_hiragana(db, Hiragana(hiragana="か", romaji="ka"))
    create_hiragana(db, Hiragana(hiragana="き", romaji="ki"))
    create_hiragana(db, Hiragana(hiragana="く", romaji="ku"))
    create_hiragana(db, Hiragana(hiragana="け", romaji="ke"))
    create_hiragana(db, Hiragana(hiragana="こ", romaji="ko"))
    create_hiragana(db, Hiragana(hiragana="さ", romaji="sa"))
    create_hiragana(db, Hiragana(hiragana="し", romaji="shi"))
    create_hiragana(db, Hiragana(hiragana="す", romaji="su"))
    create_hiragana(db, Hiragana(hiragana="せ", romaji="se"))
    create_hiragana(db, Hiragana(hiragana="そ", romaji="so"))
    create_hiragana(db, Hiragana(hiragana="た", romaji="ta"))
    create_hiragana(db, Hiragana(hiragana="ち", romaji="chi"))
    create_hiragana(db, Hiragana(hiragana="つ", romaji="tsu"))
    create_hiragana(db, Hiragana(hiragana="て", romaji="te"))
    create_hiragana(db, Hiragana(hiragana="と", romaji="to"))
    create_hiragana(db, Hiragana(hiragana="な", romaji="na"))
    create_hiragana(db, Hiragana(hiragana="に", romaji="ni"))
    create_hiragana(db, Hiragana(hiragana="ぬ", romaji="nu"))
    create_hiragana(db, Hiragana(hiragana="ね", romaji="ne"))
    create_hiragana(db, Hiragana(hiragana="の", romaji="no"))
    create_hiragana(db, Hiragana(hiragana="は", romaji="ha"))
    create_hiragana(db, Hiragana(hiragana="ひ", romaji="hi"))
    create_hiragana(db, Hiragana(hiragana="ふ", romaji="hu"))
    create_hiragana(db, Hiragana(hiragana="へ", romaji="he"))
    create_hiragana(db, Hiragana(hiragana="ほ", romaji="ho"))
    create_hiragana(db, Hiragana(hiragana="ま", romaji="ma"))
    create_hiragana(db, Hiragana(hiragana="み", romaji="mi"))
    create_hiragana(db, Hiragana(hiragana="む", romaji="mu"))
    create_hiragana(db, Hiragana(hiragana="め", romaji="me"))
    create_hiragana(db, Hiragana(hiragana="も", romaji="mo"))
    create_hiragana(db, Hiragana(hiragana="や", romaji="ya"))
    create_hiragana(db, Hiragana(hiragana="ゆ", romaji="yu"))
    create_hiragana(db, Hiragana(hiragana="よ", romaji="yo"))
    create_hiragana(db, Hiragana(hiragana="ら", romaji="ra"))
    create_hiragana(db, Hiragana(hiragana="り", romaji="ri"))
    create_hiragana(db, Hiragana(hiragana="る", romaji="ru"))
    create_hiragana(db, Hiragana(hiragana="れ", romaji="re"))
    create_hiragana(db, Hiragana(hiragana="ろ", romaji="ro"))
    create_hiragana(db, Hiragana(hiragana="わ", romaji="wa"))
    create_hiragana(db, Hiragana(hiragana="を", romaji="wo"))
    create_hiragana(db, Hiragana(hiragana="ん", romaji="n"))
    create_hiragana(db, Hiragana(hiragana="が", romaji="ga"))
    create_hiragana(db, Hiragana(hiragana="ぎ", romaji="gi"))
    create_hiragana(db, Hiragana(hiragana="ぐ", romaji="gu"))
    create_hiragana(db, Hiragana(hiragana="げ", romaji="ge"))
    create_hiragana(db, Hiragana(hiragana="ご", romaji="go"))
    create_hiragana(db, Hiragana(hiragana="ざ", romaji="za"))
    create_hiragana(db, Hiragana(hiragana="じ", romaji="ji"))
    create_hiragana(db, Hiragana(hiragana="ず", romaji="zu"))
    create_hiragana(db, Hiragana(hiragana="ぜ", romaji="ze"))
    create_hiragana(db, Hiragana(hiragana="ぞ", romaji="zo"))
    create_hiragana(db, Hiragana(hiragana="だ", romaji="da"))
    create_hiragana(db, Hiragana(hiragana="ぢ", romaji="ji"))
    create_hiragana(db, Hiragana(hiragana="づ", romaji="zu"))
    create_hiragana(db, Hiragana(hiragana="で", romaji="de"))
    create_hiragana(db, Hiragana(hiragana="ど", romaji="do"))
    create_hiragana(db, Hiragana(hiragana="ば", romaji="ba"))
    create_hiragana(db, Hiragana(hiragana="び", romaji="bi"))
    create_hiragana(db, Hiragana(hiragana="ぶ", romaji="bu"))
    create_hiragana(db, Hiragana(hiragana="べ", romaji="be"))
    create_hiragana(db, Hiragana(hiragana="ぼ", romaji="bo"))
    create_hiragana(db, Hiragana(hiragana="ぱ", romaji="pa"))
    create_hiragana(db, Hiragana(hiragana="ぴ", romaji="pi"))
    create_hiragana(db, Hiragana(hiragana="ぷ", romaji="pu"))
    create_hiragana(db, Hiragana(hiragana="ぺ", romaji="pe"))
    create_hiragana(db, Hiragana(hiragana="ぽ", romaji="po"))
    create_hiragana(db, Hiragana(hiragana="っ", romaji="small tsu"))
    create_hiragana(db, Hiragana(hiragana="きゃ", romaji="kya"))
    create_hiragana(db, Hiragana(hiragana="きゅ", romaji="kyu"))
    create_hiragana(db, Hiragana(hiragana="きょ", romaji="kyo"))
    create_hiragana(db, Hiragana(hiragana="しゃ", romaji="sha"))
    create_hiragana(db, Hiragana(hiragana="しゅ", romaji="shu"))
    create_hiragana(db, Hiragana(hiragana="しょ", romaji="sho"))
    create_hiragana(db, Hiragana(hiragana="ちゃ", romaji="cha"))
    create_hiragana(db, Hiragana(hiragana="ちゅ", romaji="chu"))
    create_hiragana(db, Hiragana(hiragana="ちょ", romaji="cho"))
    create_hiragana(db, Hiragana(hiragana="にゃ", romaji="nya"))
    create_hiragana(db, Hiragana(hiragana="にゅ", romaji="nyu"))
    create_hiragana(db, Hiragana(hiragana="にょ", romaji="nyo"))
    create_hiragana(db, Hiragana(hiragana="ひゃ", romaji="hya"))
    create_hiragana(db, Hiragana(hiragana="ひゅ", romaji="hyu"))
    create_hiragana(db, Hiragana(hiragana="ひょ", romaji="hyo"))
    create_hiragana(db, Hiragana(hiragana="みゃ", romaji="mya"))
    create_hiragana(db, Hiragana(hiragana="みゅ", romaji="myu"))
    create_hiragana(db, Hiragana(hiragana="みょ", romaji="myo"))
    create_hiragana(db, Hiragana(hiragana="りゃ", romaji="rya"))
    create_hiragana(db, Hiragana(hiragana="りゅ", romaji="ryu"))
    create_hiragana(db, Hiragana(hiragana="りょ", romaji="ryo"))
    create_hiragana(db, Hiragana(hiragana="ぎゃ", romaji="gya"))
    create_hiragana(db, Hiragana(hiragana="ぎゅ", romaji="gyu"))
    create_hiragana(db, Hiragana(hiragana="ぎょ", romaji="gyo"))
    create_hiragana(db, Hiragana(hiragana="じゃ", romaji="ja"))
    create_hiragana(db, Hiragana(hiragana="じゅ", romaji="ju"))
    create_hiragana(db, Hiragana(hiragana="じょ", romaji="jo"))
    create_hiragana(db, Hiragana(hiragana="びゃ", romaji="bya"))
    create_hiragana(db, Hiragana(hiragana="びゅ", romaji="byu"))
    create_hiragana(db, Hiragana(hiragana="びょ", romaji="byo"))
    create_hiragana(db, Hiragana(hiragana="ぴゃ", romaji="pya"))
    create_hiragana(db, Hiragana(hiragana="ぴゅ", romaji="pyu"))
    create_hiragana(db, Hiragana(hiragana="ぴょ", romaji="pyo"))
