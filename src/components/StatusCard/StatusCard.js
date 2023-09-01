import {StyleSheet, Text, View, Image} from 'react-native';
import React, {useState} from 'react';
import StatusCardHeader from './StatusCardHeader';
import ReadMoreCard from './ReadMoreCard';
import StatusIconCard from './StatusIconCard';
import StatusCommentsCard from './StatusCommentsCard';

const StatusCard = () => {
  const [content, setContent] = useState(
    '6 AYDA HAYATINI DEĞİŞTİR! React/React Native ile Web/Mobile Online Yazılım Eğitimi Eğitimi tamamlayıp 6 ay içinde İşsiz Kalan Yok Uluslararası Akrediteli, Üniversite Onaylı ve E-Devlet te Görünür Sertifikalı. Dünyada en çok kullanılan ve en çok iş olanağına sahip olan teknoloji! Eğitimi tamamlayıp 6 ay içinde işsiz kalan olursa ücret iade garantisi. Slack üzerinden ders dışında sorulan sorulara ve anlaşılmayan kısımlara cevap verilir, çözülemeyen konularda birebir problemler birlikte çözülecektir. Eğitim konuları: Algoritma, HTML, CSS, HTML5, CSS3, SCSS, JS, B, Git, Trello/Jira, Jenkins, AWS, API, React, React-Redux, Firebase, TS, Agile, MVC, MVVM, Projeler ,Mülakat, CV, Yayınlama ve Dahası. Tarih: 5.8.2023 (6 ay) Eğitim günler: Cumartesi ve Pazar akşamları 4/5 oturum ve her oturum 40 dakika. Türkiye Saat: 21.00-00:00 Anlaşılmayan noktalar üzerine ise ‘Yedek Gün Dersi’ ile o sorunlar hallediliyor, tekrar üzerinden geçilerek. Eğitim Sonucu: React/React Native ile Web Frontend/Mobile Developer! Katılım Yaş:17+ Toplam Süre: 250+ saat Gereksinimler: Bilgisayar ve İnternet! Kullanılacak araçlar: VS Code.. Yardımcı araçlar: Google classroom, Slack, Zoom, Teachable! -CV Desteği + Referanslar. - Aktif olarak Mentörlük desteği sağlanmaktadır. - Eğitimlere Aktif olarak çalışan ve Yurtdışı projeler tecrübeli olan mühendisler/programcılar da katılmakta ve destek vermektedirler. Katılım için: İsim, Ülke, Yaş ve Program Adı(Yetişkinler Yazılım) ve mail adresinizi info@udemig.dev adresine gönderiniz. Ücret: Türkiye ve Diğer ülkeler 1500 dolar. Avrupa, ABD, Kanada.. 2000 dolar Link: https://udemig.com/webforadult.php YouTube: https://www.youtube.com/watch?v=Hakqz... Canlı ders örneğimiz: https://www.youtube.com/watch?v=m-3h1... Eğitim sonu Telefon çekilişi de olacaktır. Kurs sonunda onlarca web ve mobil(iOS ve Android) projesi yapmış ve istediğiniz projeyi yapabilecek seviyede olacaksınız. - İnternet ve Bilgisayar Zorunludur. #yazılım #eğitim #web #mobil #ios #android #js #mehmetcanseyhan #react #qa #ingilizce #java #ingilizce #frontend #isveckrali #swift #kotlin #java #sdet #yazılım #eğitim',
  );

  return (
    <View className="border-t border-b border-stone-300 ">
      <StatusCardHeader />
      <ReadMoreCard content={content} />
      <Image
        className="w-100 h-96 mt-5"
        source={{
          uri: 'https://yt3.ggpht.com/AsRKSuykmf8m5IKnCqteS7SBzx10aiA2JIh-32gS1nZk4SEWOXLY0xEmYBk7kaytKkIBUwYDkhZoWg=s768-c-fcrop64=1,17a70000a794ffff-nd-v1',
        }}
      />
      <StatusIconCard />
      <StatusCommentsCard />
    </View>
  );
};

export default StatusCard;

const styles = StyleSheet.create({});
