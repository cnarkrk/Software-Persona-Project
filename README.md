Software Persona Project – Kitap Yönetim Paneli

Bu proje, React kullanılarak geliştirilmiş bir kitap yönetim panelidir.
Uygulama içerisinde kitaplar üzerinde CRUD (Create, Read, Update, Delete) işlemleri gerçekleştirilebilir.

Kullanılan Teknolojiler

React

Axios

React Bootstrap

JSON Server

Projenin Amacı

Bu projenin amacı, temel bir yönetim paneli mantığıyla:

Kitap ekleme

Kitapları listeleme

Kitap güncelleme

Kitap silme

işlemlerini gerçekleştirebilen bir CRUD yapısı oluşturmaktır.

API Kullanımı Hakkında

Projede veri işlemleri json-server üzerinden sağlanmaktadır.
Bu nedenle uygulamayı çalıştırmadan önce API iletişiminin kurulabilmesi için aşağıdaki komutların çalıştırılması gerekir.

JSON Server başlatma
npx json-server --watch db.json --port 3001


Ardından React uygulaması çalıştırılabilir:

npm install
npm start

Not

JSON Server çalıştırılmadan uygulama içerisindeki veri işlemleri gerçekleştirilemez.

Geliştirici

Çınar Kürük