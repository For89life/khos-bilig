/* i18n.js — MN ⇄ EN хэл солигч.
   Орчуулга нь текстийн зангилаа бүрийг тольтой тулгаж солино; толинд байхгүй
   мөрийг хөндөхгүй. data-svc-г ОГТ орчуулахгүй — Google Form-той таарах ёстой. */
(function(){
  var DICT = {
"Улаанбаатар хот — Төвийн бүс: Сүхбаатар, Чингэлтэй, Баянзүрх дүүрэг": "Ulaanbaatar — Central zone: Sukhbaatar, Chingeltei and Bayanzurkh districts",
"Улаанбаатар хот — Баруун бүс: Сонгинохайрхан, Баянгол, Хан-Уул дүүрэг": "Ulaanbaatar — Western zone: Songinokhairkhan, Bayangol and Khan-Uul districts",
"Улаанбаатар хот — Зүүн бүс: Налайх, Багануур, Багахангай дүүрэг": "Ulaanbaatar — Eastern zone: Nalaikh, Baganuur and Bagakhangai districts",
"Төв бүсийн зураглалыг томруулж үзэх": "Enlarge the Central zone map",
"Баруун бүсийн зураглалыг томруулж үзэх": "Enlarge the Western zone map",
"Зүүн бүсийн зураглалыг томруулж үзэх": "Enlarge the Eastern zone map",
"Бүсийн зураглал": "Zone map",
"ТӨГС ҮЙЛЧИЛГЭЭГ БИД ТҮҮЧЭЭЛНЭ": "SETTING THE STANDARD FOR EXCEPTIONAL SERVICE",
"24/7 түүчээлнэ": "24/7, around the clock",
"8 жилийн": "8 years of",
"туршлага": "experience",
"Хамгаалалтын салбарт 8 дахь жилдээ тогтвортой, найдвартай үйл ажиллагаа явуулж байна.": "Now in our eighth year of steady, dependable work in the security industry.",
"90% хүртэл барагдуулна": "of up to 90%",
"Даатгалын байгууллагатай хамтран ажилладаг бөгөөд хамгаалалтын албаны буруугаас хохирол учирсан нь тогтоогдвол 90 хүртэлх хувийг барагдуулна.": "We work with an insurance provider. If an investigation determines that the damage was caused by our security service, up to 90% of the resulting loss will be compensated.",
"Хохирлын 90 хүртэлх хувийг барагдуулах эрсдэл хариуцах тогтолцоо": "An insurance-backed system covering up to 90% of damages",
"Гуравдагч этгээдийн өмнө үүсэж болзошгүй хохирлын эрсдэлийг бууруулах зорилгоор бид «Мөнх Даатгал» ХХК-тай «Ерөнхий хариуцлагын даатгалын гэрээ» байгуулан ажилладаг. Гуравдагч этгээдийн амь нас, эрүүл мэнд, эд хөрөнгөд учирсан эрсдэлийг хариуцаж, хамгаалалтын албаны буруугаас хохирол учирсан нь тогтоогдвол хохирлын 90 хүртэлх хувийг барагдуулна.": "To reduce the risk of damage to third parties we maintain a General Liability Insurance Agreement with Munkh Insurance LLC. It covers risks to the life, health and property of third parties: where an investigation determines that the damage was caused by our security service, up to 90% of the resulting loss will be compensated.",
"Улаанбаатар дүүргийн бүсүүд": "Zones of Ulaanbaatar districts",
"Хүсэлтэд 24 цагийн дотор хариу өгнө.": "We reply to inquiries within 24 hours.",
"Баянбогд Плаза, 3-р давхар": "Bayanbogd Plaza, 3rd floor",
"Улаанбаатар хот, Чингэлтэй дүүрэг, 5-р хороо, Их тойруу": "Ikh Toiruu, 5th khoroo, Chingeltei district, Ulaanbaatar",
"Ажлын байр үзэх": "View vacancies",
"ХОС БИЛИГ СЕКЬЮРИТИ ХОЛДИНГ ХХК": "KHOS BILIG SECURITY HOLDING LLC",
"Хамгаалалт, аюулгүй байдлын газар": "Guarding & Security Division",
"Даваа–Бямба 09:00–18:00 · Яаралтай 24/7": "Mon–Sat 09:00–18:00 · Emergency 24/7",
"Холбоо барих": "Contact",
"Бидний тухай": "About us",
"Үйлчилгээний чиглэл": "Services",
"Хүний нөөц": "Careers",
"Мэдээ мэдээлэл": "News",
"Нүүр": "Home",
"Хамгаалалтын газар": "Security Division",
"Үйлчилгээний бүтэц": "Service structure",
"24/7 AI камерын хяналт": "24/7 AI camera monitoring",
"Эрсдэл хариуцах тогтолцоо": "Liability & insurance",
"Хамтрагч байгууллагууд": "Partner organizations",
"Зургийн цомог": "Photo gallery",
"Бүтэн цэс": "Full menu",
"ХОС БИЛИГ": "KHOS BILIG",
"Объектын хамгаалалт": "Facility security",
"Банк санхүүгийн байгууллагын хамгаалалт": "Bank & financial institution security",
"Ашигт малтмал, уул уурхайн хамгаалалт": "Mineral & mining site security",
"Аюулгүй ачаа, тээвэрлэлт, тэсрэх бодис тэсэлгээний хэрэгслийн хамгаалалт": "Cargo, transport & explosives escort security",
"Барилга байгууламж, бүтээн байгуулалтын хамгаалалт": "Construction & development site security",
"Амралт, зочид буудал, худалдаа үйлчилгээний газрын хамгаалалт": "Resort, hotel & retail security",
"Шоу тоглолт, олон хүн хамарсан үйл ажиллагаа, арга хэмжээний хамгаалалт": "Concert, mass gathering & event security",
"Үнэт эдлэлийн тээвэрлэлтийн үеийн хамгаалалт": "Valuables-in-transit security",
"24/7 Найдвартай хамгаалалт": "24/7 Reliable protection",
"Төгс үйлчилгээг бид": "We deliver flawless service",
"24/7 түүчлээнэ": "24/7, around the clock",
"Бид сүүлийн үеийн дэвшилтэт технологийг ашиглаж, алба хаагчдаа шинэлэг арга барил, мэргэжлийн өндөр ур чадварт тогтмол сургадаг. Ёс зүй, сахилга батыг эрхэмлэн, аюулгүй байдлыг дээд зэргээр хангасан тэргүүлэгч компаниудын нэг.": "We apply the latest technology and continuously train our officers in new methods and high professional skill. Guided by ethics and discipline, we are one of the leading companies delivering security of the highest order.",
"Үнийн санал авах": "Request a quote",
"Таны аюулгүй байдал —": "Your security —",
"24/7 хяналтад": "monitored 24/7",
"Өмч хөрөнгө, ажилтан, бизнесийн тань аюулгүй байдлыг орчин үеийн технологи, мэргэжлийн хамгаалалтын үйлчилгээгээр найдвартай хамгаална.": "We reliably protect your property, staff and business with modern technology and professional security services.",
"Дуудлага бүрт —": "Every call —",
"бид 24/7 бэлэн": "we are ready 24/7",
"Тусгайлан бэлтгэгдсэн шуурхай ажиллагааны баг нь дохиолол, дуудлага бүрд богино хугацаанд газар дээр нь очиж, нөхцөл байдлыг шуурхай хяналтдаа авна.": "Our specially trained rapid-response team reaches the scene within minutes of any alarm or call and brings the situation under control.",
"Дэлгэрэнгүй үзэх": "Learn more",
"Даатгагч түнш": "Insurance partner",
"Даатгалтай хамгаалалтын алба": "Insurance-backed security service",
"Хохирлыг": "We cover damages",
"Мөнх Даатгал ХХК": "Munkh Insurance LLC",
"Танилцуулга": "About Us",
"Салбартаа": "Now in our",
"8 дахь жилдээ": "8th year",
"тогтвортой ажиллаж байна": "of steady operation",
"дахь жилдээ": "years",
"«Хос Билиг Секьюрити» ХХК нь Монгол Улсын Үндсэн хууль, «Гэрээт харуул хамгаалалтын тухай» хууль болон холбогдох бусад эрх зүйн актуудыг үйл ажиллагаандаа чанд мөрдлөг болгон хэрэгжүүлдэг, харуул хамгаалалтын салбарт 8 дахь жилдээ тогтвортой, тасралтгүй үйл ажиллагаа явуулж буй мэргэжлийн байгууллага юм.": "Khos Bilig Security LLC is a professional organization that strictly observes the Constitution of Mongolia, the Law on Contract Guarding and Security and other related legal acts, and that has operated steadily and without interruption in the security industry for eight years.",
"Бид аюулгүй байдлыг зөвхөн үүрэг гэж бус, харилцагчийн үнэ цэнэ, нэр хүнд, хөрөнгийг хамгаалах стратегийн чухал хүчин зүйл гэж үздэг. Иймд үйл ажиллагаандаа олон улсын жишигт нийцсэн арга барилыг нэвтрүүлж, MNS 6908:2021 «Аюулгүй байдал, харуул хамгаалалтын үйлчилгээ» үндэсний стандартыг тууштай хэрэгжүүлэн ажиллаж байна.": "We see security not merely as a duty but as a strategic factor protecting our client's value, reputation and assets. We therefore apply internationally aligned methods and consistently implement the national standard MNS 6908:2021 “Security and guarding services”.",
"Сүүлийн 4 жилийн хугацаанд манай хамт олон өндөр эрсдэлтэй, өндөр зэрэглэлийн хамгаалалт шаардсан объектууд болох уул уурхайн олборлолт, боловсруулах үйлдвэр, нүүрсний кемп, бизнесийн төвүүдэд тусгайлсан хамгаалалтын үйлчилгээ үзүүлж, найдвартай түнш гэдгээ батлан харуулсаар байна.": "Over the past four years our team has provided dedicated security at high-risk, high-grade sites — mining operations, processing plants, coal camps and business centers — proving itself a dependable partner.",
"MNS 6908:2021 стандарт": "MNS 6908:2021 standard",
"«Аюулгүй байдал, харуул хамгаалалтын үйлчилгээ» үндэсний стандартын хэрэгжүүлэлт": "Implementation of the national standard “Security and guarding services”",
"Монгол Улсын болон «Хос Билиг Секьюрити»-гийн туг": "The flags of Mongolia and Khos Bilig Security",
"дахь жилдээ тогтвортой": "years of stable operation",
"хүртэл хохирол барагдуулалт": "of damages covered",
"нэгдсэн операторын хяналт": "centralized operator monitoring",
"Үйл ажиллагааны": "Our",
"чиглэл": "services",
"Бүсчилсэн зохион байгуулалттай": "Zone-based",
"нэгжүүд": "units",
"Улаанбаатар хотыг гурван бүсэд хувааж, хөдөө орон нутгийг тусгай нэгжээр хариуцан улсын хэмжээнд үйлчилгээ үзүүлнэ.": "Ulaanbaatar is divided into three zones, while the provinces are covered by a dedicated unit, giving us nationwide reach.",
"Улаанбаатар хот": "Ulaanbaatar",
"Төв бүс": "Central zone",
"Хотын төв бүсийн объект, байгууллагуудын хамгаалалтыг хариуцан зохион байгуулна.": "Responsible for guarding facilities and organizations in the city's central zone.",
"Баруун бүс": "Western zone",
"Баруун бүсийн объект, байгууллагуудын хамгаалалтыг хариуцан зохион байгуулна.": "Responsible for guarding facilities and organizations in the western zone.",
"Зүүн бүс": "Eastern zone",
"Зүүн бүсийн объект, байгууллагуудын хамгаалалтыг хариуцан зохион байгуулна.": "Responsible for guarding facilities and organizations in the eastern zone.",
"Орон нутаг": "Provinces",
"Хөдөө орон нутаг": "Rural provinces",
"Баянхонгор, Дорнод, Дорноговь аймаг дахь уул уурхайн олборлолт, үйлдвэр, кемпийн хамгаалалтыг тусгай нэгжээр хариуцна.": "A dedicated unit guards mining operations, plants and camps in Bayankhongor, Dornod and Dornogovi provinces.",
"Зохион байгуулалт": "Organization",
"Үйлчилгээний": "Service",
"бүтэц": "structure",
"Компанийн үйл ажиллагаа нь хамгаалалтын ажилтнуудын албаны бэлэн байдлыг өндөр түвшинд хангах, шуурхай удирдлагаар хангах зорилгоор дараах бүтэц зохион байгуулалтаар хэрэгждэг.": "The company operates through the following structure, designed to keep officers at a high level of readiness and under responsive command.",
"24 цагийн төв оффисын операторын хяналт": "24-hour head-office operator monitoring",
"Төв оффисын оператор 24 цагийн турш тасралтгүй камерын хяналт хэрэгжүүлж, боломжит бүх цэгт хяналтын камерын систем суурилуулан ажилладаг.": "Head-office operators maintain uninterrupted camera monitoring around the clock, with surveillance systems installed at every feasible point.",
"Шуурхай ажиллагааны бүлэг": "Rapid-response team",
"Тусгай тоноглогдсон, шар өнгийн гэрэл, дуут дохио бүхий автомашинтай шуурхай бүлэг 24 цагийн турш дуудлагад бэлэн ажиллана.": "The rapid-response team, equipped with specially fitted vehicles with amber beacons and sirens, stays ready for calls 24 hours a day.",
"AI камерын систем хяналт": "AI camera system monitoring",
"AI-д суурилсан ухаалаг камерууд эрсдэлээс урьдчилан сэргийлж, зөрчлийг илрүүлж, түргэн шуурхай арга хэмжээ авах боломжийг бүрдүүлнэ.": "AI-based smart cameras help prevent risks, detect violations and enable swift action.",
"Аюулгүй байдал хариуцсан менежер": "Security manager",
"Багийн түвшинд мэргэжлийн удирдлага, хяналтыг аюулгүй байдал хариуцсан менежер хэрэгжүүлж, албаны бэлэн байдлыг өндөр түвшинд хангадаг.": "A dedicated security manager provides professional leadership and control at team level, keeping service readiness high.",
"«Мөнх Даатгал» ХХК-тай «Ерөнхий хариуцлагын даатгалын гэрээ» байгуулан ажилладаг тул учирсан хохирлыг баталгаатай барагдуулна.": "A General Liability Insurance Agreement with Munkh Insurance LLC guarantees that damages incurred are compensated.",
"MNS 6908:2021 стандартын хэрэгжүүлэлт": "MNS 6908:2021 standard implementation",
"«Аюулгүй байдал, харуул хамгаалалтын үйлчилгээ» үндэсний стандартыг олон улсын жишигт нийцсэн арга барилаар тууштай хэрэгжүүлдэг.": "The national standard “Security and guarding services” is implemented consistently using internationally aligned methods.",
"Технологи": "Technology",
"AI камерын хяналт": "AI camera monitoring",
"Хиймэл оюун ухаанд суурилсан ухаалаг хяналтын камерыг үйл ажиллагаандаа нэвтрүүлж, объектын аюулгүй байдлыг 24 цагийн турш бүрэн хянан, эрсдэлээс урьдчилан сэргийлэх, илрүүлэх, түргэн шуурхай арга хэмжээ авах боломжийг бүрдүүлж байна.": "We have introduced AI-based smart surveillance cameras, giving full 24-hour oversight of a site and the ability to prevent, detect and respond rapidly to risks.",
"Нарийвчлал": "Resolution",
"мегапиксель": "megapixels",
"400 мегапикселийн суурин болон бөмбөгөр хос камерын дүрсийг нэгтгэн өндөр нарийвчлалтай дүрс гаргана.": "Two 400-megapixel cameras — one fixed, one dome — merge into a single high-resolution image.",
"Оптик томруулалт": "Optical zoom",
"хүртэл": "up to",
"5х оптик (2.8–12мм линз) болон 20х оптик (4.7–94мм линз), нийт 50х дижитал татах чадвартай.": "5× optical (2.8–12 mm lens) and 20× optical (4.7–94 mm lens), with 50× digital zoom in total.",
"Шөнийн хараа": "Night vision",
"метр": "meters",
"10 ширхэг өндөр хүчин чадалтай инфра улаан гэрэлтэй: улаан гэрлийн зай 120м, цагаан гэрлийн зай 60м.": "Ten high-power infrared lamps: 120 m range on infrared, 60 m on white light.",
"Эргэлтийн механизм (PTZ)": "Pan-tilt-zoom (PTZ)",
"хэвтээ · 90° босоо": "horizontal · 90° vertical",
"Секундэд 0–20° эргэх хурдтайгаар орчныг бүрэн тольдоно.": "Rotating at 0–20° per second, it surveys the surroundings completely.",
"Автомат ажиллагаа": "Automation",
"урьдчилсан байрлал": "preset positions",
"16 төрлийн preset байрлал, 2 цэгийн хооронд скан хийх, хамгаалалтын горимтой.": "Sixteen preset positions, two-point scanning and a guard mode.",
"Санах ой": "Memory",
"Тог тасарсан ч санах ойгоо хадгалж, ажиллагааг тасралтгүй үргэлжлүүлнэ.": "Settings are retained through a power cut and operation resumes without interruption.",
"Эрсдэл хариуцах тогтолцоо, даатгал": "Liability system & insurance",
"Хариуцлага нь": "Protection backed by",
"баталгаажсан хамгаалалт": "guaranteed liability coverage",
"Давуу тал": "Advantages",
"Бидний": "Our",
"давуу талууд": "advantages",
"Хууль эрх зүйн бүрэн зохицуулалттай үйл ажиллагаа": "Operations fully compliant with the law",
"MNS 6908:2021 стандартын дагуу тогтвортой хэрэгжүүлэлт": "Consistent implementation of the MNS 6908:2021 standard",
"Тусгайлсан хамгаалалт шаардсан өндөр зэрэглэлийн объектууд дээр ажилласан туршлага": "Experience at high-security sites requiring specialized protection",
"Тасралтгүй хяналт, шуурхай удирдлага бүхий зохион байгуулалт": "An organization built on continuous monitoring and responsive command",
"Даатгалын хамгаалалттай, эрсдэл хариуцах чадвартай систем": "An insurance-backed system with liability coverage",
"Итгэл хүлээлгэн хамтран ажилладаг": "Organizations that place their",
"байгууллагууд": "trust in us",
"Манай компанид итгэл хүлээлгэн хамтран ажилладаг байгууллагууд нь салбартаа тэргүүлэгч, өндөр шаардлага бүхий байгууллагууд бөгөөд бид тэдний итгэлийг бодит үр дүнгээр баталгаажуулж ирсэн.": "The organizations that entrust their security to us are leaders in their fields with demanding requirements, and we have justified their trust with real results.",
"Toyota Таван Богд": "Toyota Tavan Bogd",
"Гэгээнтэн Entertainment": "Gegeenten Entertainment",
"Гэгээнтэн Оффис": "Gegeenten Office",
"Хос Даль": "Khos Dal",
"Парк Од Mall": "Park Od Mall",
"Наранмандал Энтерпрайзес": "Naranmandal Enterprises",
"Юбиксолюшн ХХК": "Ubix Solution LLC",
"Говийн Мөнгөн Жолоо": "Goviin Mongon Joloo",
"Илч Түлш ХХК": "Ilch Tulsh LLC",
"Бизнесийн төв": "Business center",
"Зочид буудал, оффис": "Hotel and offices",
"Оффисын барилга": "Office building",
"Автомашины худалдаа, засвар үйлчилгээ": "Car sales and service",
"Худалдааны төв": "Shopping center",
"Хиймэл оюунд суурилсан эрт илрүүлгийн төв": "AI-based early-detection center",
"Zint Pharm — эм, эмийн бүтээгдэхүүн": "Zint Pharm — pharmaceuticals",
"Ноолуурын үйлдвэр": "Cashmere factory",
"Энтертайнмент төв": "Entertainment center",
"Орон сууц, худалдаа үйлчилгээ": "Residential, retail and services",
"Алтны уурхай, үйлдвэр · Баянхонгор аймаг": "Gold mine and plant · Bayankhongor province",
"Цагаанчулуутын алтны уурхай · Дорнод аймаг": "Tsagaanchuluut gold mine · Dornod province",
"Нүүрсний талбай, кемп · Дорноговь, Ханги боомт": "Coal yard and camp · Dornogovi, Khangi border crossing",
"Тэсрэх материал, тэсэлгээний хэрэгслийн үйлдвэр, агуулах": "Explosives and blasting-equipment plant and warehouse",
"Бидэнтэй хамтран ажиллахыг хүсвэл": "Would you like to work with us",
"Хэрэгцээт үйлчилгээгээ сонгоод": "Choose the services you need and",
"үнийн санал аваарай": "request a quote",
"Бидний өдөр тутмын": "Our day-to-day",
"үйл ажиллагаа": "operations",
"Бүх цомгийг үзэх": "View the full gallery",
"Худалдаа үйлчилгээний төвийн хамгаалалт": "Shopping and service center security",
"Зочид буудлын хамгаалалт — Улаанбаатар": "Hotel security — Ulaanbaatar",
"Орон нутгийн объектын хяналтын цэг": "Checkpoint at a provincial site",
"Тээврийн хэрэгслийн үзлэг, шалгалт": "Vehicle inspection and check",
"Ээлжийн бүрэлдэхүүн, шуурхай бүлэг": "Shift personnel and rapid-response team",
"Тусгай хамгаалалтын бүрэн хэрэгсэл": "Full special-protection equipment",
"Бүтээн байгуулалтын талбайн хамгаалалт": "Development site security",
"Боловсруулах үйлдвэрийн хамгаалалт": "Processing plant security",
"Эргүүлийн ажиллагаа": "Patrol duty",
"Хяналтын төвийн оператор": "Control room operator",
"Байгууллагын": "Latest",
"сүүлийн үеийн мэдээ": "company news",
"Байгууллага": "Company",
"Үйлчилгээ": "Services",
"Ажлын байр": "Careers",
"Шинэ харуулын баг бэлтгэх сургалт амжилттай боллоо": "Training for the new guard team completed successfully",
"Шинэ харуулын бүрэлдэхүүнд зориулсан хоёр долоо хоногийн сургалтыг амжилттай зохион байгуулав.": "A two-week training program for the new guard intake was held successfully.",
"Дохиолол хамгаалалтын шинэ систем нэвтрүүллээ": "A new alarm and security system introduced",
"Ухаалаг камерын систем болон автомат дохиоллыг бүх объектод нэвтрүүлж эхэллээ.": "Smart camera systems and automatic alarms are being rolled out across all sites.",
"Хамгаалагч ажилд авна — шинэ ажлын байр нээгдлээ": "Guards wanted — new vacancies open",
"Мэргэшсэн харуул хамгаалагч ажилд авах зар гарлаа. Цагийн хуваарь уян хатан.": "We are hiring qualified security guards. Flexible shift schedules.",
"Манай багт": "Join",
"нэгдээрэй": "our team",
"Бид харуул хамгаалагч, ээлжийн ахлагч, хяналтын төвийн оператор нарыг байнга элсүүлдэг. Сургалт, дүрэмт хувцас, тусгай хэрэгсэл болон нийгмийн баталгааг бүрэн хангана.": "We recruit security guards, shift supervisors and control room operators on an ongoing basis. Training, uniform, special equipment and full social benefits are provided.",
"Анкет илгээх": "Submit an application",
"Харуул хамгаалагч": "Security guard",
"Ээлжийн ахлагч": "Shift supervisor",
"Хамгаалалтын шийдлээ": "Let's discuss your",
"ярилцъя": "security needs",
"Объектынхоо онцлогийг хэлээрэй — бид тохирсон санал, үнийн тооцоог 24 цагийн дотор хүргүүлнэ.": "Tell us about your site and we will send a tailored proposal and price estimate within 24 hours.",
"Утас": "Phone",
"Мэйл хаяг": "Email",
"Хаяг": "Address",
"Улаанбаатар хот, Чингэлтэй дүүрэг, 5-р хороо, Их тойруу, Баянбогд Плаза, 3-р давхарт": "3rd floor, Bayanbogd Plaza, Ikh Toiruu, 5th khoroo, Chingeltei district, Ulaanbaatar",
"Ажиллах цаг": "Working hours",
"Байршил": "Location",
"Утас: 7720-2525 · 9963-6785": "Phone: 7720-2525 · 9963-6785",
"Google Maps дээр нээх": "Open in Google Maps",
"ХОС БИЛИГ СЕКЬЮРИТИ ХОЛДИНГ ХХК-ийн байршил": "Location of Khos Bilig Security Holding LLC",
"Харуул хамгаалалтын салбарт 8 дахь жилдээ тогтвортой ажиллаж буй мэргэжлийн байгууллага. MNS 6908:2021 стандартын хэрэгжүүлэлт, даатгалтай хамгаалалтын алба.": "A professional organization in its eighth year of steady work in the security industry. Implementing MNS 6908:2021, with an insured security service.",
"Шоу тоглолт, арга хэмжээний хамгаалалт": "Concert and event security",
"Аюулгүй ачаа, тээвэрлэлт, тэсрэх бодисын хамгаалалт": "Cargo, transport and explosives security",
"Албан хаяг": "Office address",
"Дэргэдийн утас · 24/7": "Hotline · 24/7",
"Зөвлөгөө авах": "Get advice",
"© 2026 ХОС БИЛИГ СЕКЬЮРИТИ ХОЛДИНГ ХХК. Зохиогчийн эрхээр хамгаалагдав.": "© 2026 KHOS BILIG SECURITY HOLDING LLC. All rights reserved.",
"PREVIEW · ЗАСВАР v2": "PREVIEW · REVISION v2",
"PREVIEW · ЦОМОГ": "PREVIEW · GALLERY",
"PREVIEW · ҮНИЙН САНАЛ": "PREVIEW · QUOTE",
"Улаанбаатар хот болон орон нутаг дахь объектууд дээрх ээлжийн ажиллагаа, шуурхай бүлэг, хяналтын төвийн өдөр тутмын үйл ажиллагааны эгшинүүд.": "Moments from day-to-day duty at sites in Ulaanbaatar and the provinces — shift work, the rapid-response team and the control room.",
"Улаанбаатар · Төв бүс": "Ulaanbaatar · Central zone",
"Улаанбаатар": "Ulaanbaatar",
"Алба хаагч худалдааны төвийн танхимд ээлжийн үүрэг гүйцэтгэж, үйлчлүүлэгчдийн аюулгүй байдлыг хангаж байна.": "An officer on shift duty in the shopping center hall, keeping customers safe.",
"Зочид буудлын объектын хамгаалалт": "Hotel site security",
"Таван одтой зочид буудлын үүдэнд ээлжийн бүрэлдэхүүн болон хамгаалалтын автомашинууд бэлэн байдалд ажиллаж байна.": "Shift personnel and security vehicles on standby at the entrance of a five-star hotel.",
"Ээлжийн бүрэлдэхүүн": "Shift personnel",
"Аюулгүй байдал хариуцсан менежер болон ээлжийн алба хаагчид үүрэг хүлээн авахад бэлэн зогсож байна.": "The security manager and shift officers standing ready to take over duty.",
"Орон нутаг · Тусгай объект": "Provinces · Special site",
"Тэсрэх бодисын үйлдвэрийн хамгаалалт": "Explosives plant security",
"Тэсрэх материалын үйлдвэрийн харуулын байранд алба хаагчид тусгай журмын дагуу үүрэг гүйцэтгэнэ.": "Officers perform duty under special regulations at the guard post of an explosives plant.",
"Объектын нэвтрэх хяналтын цэг": "Site access control point",
"Хамгаалалтын бүсийн хаалганы постод алба хаагчид нэвтрэх хөдөлгөөнийг хянан ажиллаж байна.": "Officers at the gate post of a protected zone controlling entry and exit.",
"Орон нутаг · Тээвэр": "Provinces · Transport",
"Тээврийн хэрэгслийн үзлэг": "Vehicle inspection",
"Объектоос гарах тээврийн хэрэгсэлд үзлэг хийж, ачааны бүрэн бүтэн байдлыг шалгаж байна.": "Vehicles leaving the site are inspected and cargo integrity is verified.",
"Радио холбоогоор мэдээлэл дамжуулж байна": "Reporting over the radio",
"Алба хаагч объектын нөхцөл байдлыг радио холбоогоор хяналтын төвд шуурхай мэдээлж байна.": "An officer promptly reports site conditions to the control room over the radio.",
"Тусгай бүлэг": "Special team",
"Тусгай бэлтгэгдсэн бүлгийн алба хаагч бүрэн хамгаалалтын хэрэгслээр тоноглогдсон байдал.": "An officer of the specially trained team fully equipped with protective gear.",
"Стандарт хангамж": "Standard issue",
"Байгууллагын энгэрийн тэмдэг": "The company badge",
"Алба хаагчид стандартын дагуу дүрэмт хувцас, байгууллагын тэмдгээр бүрэн хангагдсан байдаг.": "Officers are fully issued with regulation uniform and the company badge.",
"Тусгай хэрэгслийн бүрдэл": "Special equipment set",
"Гэрэл ойлгогч хантааз, бүс болон тусгай хэрэгслээр алба хаагчид бүрэн тоноглогддог.": "Officers are fully equipped with high-visibility vests, belts and special equipment.",
"Монгол Улс болон байгууллагын туг": "The flags of Mongolia and the company",
"Хурлын танхимд Монгол Улсын төрийн далбаа болон байгууллагын туг хамт залагдсан байна.": "The state flag of Mongolia and the company flag stand together in the meeting room.",
"Улаанбаатар · Барилга": "Ulaanbaatar · Construction",
"Барилгын талбайн хамгаалалт": "Construction site security",
"Баригдаж буй орон сууцны цогцолборын талбайд алба хаагч эргүүлийн автомашины хамт үүрэг гүйцэтгэж байна.": "An officer on duty with a patrol vehicle at a residential complex under construction.",
"Банк, АТМ-ийн хамгаалалт": "Bank and ATM security",
"Банкны салбар болон АТМ-ийн бүсэд аюулгүй байдлын хяналт тавьж, радио холбоогоор мэдээлэл дамжуулж байна.": "Security oversight of a bank branch and ATM area, with reporting over the radio.",
"Харуулын постын хяналт": "Guard post monitoring",
"Постын байранд алба хаагч камерын дүрсийг хянан, объектын нөхцөл байдлыг тасралтгүй ажиглаж байна.": "At the post, an officer watches the camera feed and observes the site continuously.",
"Албаны бэлэн байдал": "Operational readiness",
"Ээлжийн бүртгэл хөтлөлт": "Keeping the shift log",
"Алба хаагч ээлжийн тэмдэглэл, үзлэгийн бүртгэлийг журмын дагуу хөтөлж, хүлээлцэх ажиллагааг баримтжуулна.": "An officer keeps the shift notes and inspection log by the rules, documenting the handover.",
"Тэсрэх бодисын үйлдвэрийн харуул": "Explosives plant guard",
"«Илч Түлш» ХХК-ийн тэсрэх бодисын үйлдвэрийн үүдэнд ээлжийн алба хаагчид бэлэн байдалд ажиллаж байна.": "Shift officers on standby at the entrance of the Ilch Tulsh LLC explosives plant.",
"Орон нутаг · Шуурхай бүлэг": "Provinces · Rapid response",
"Эргүүлийн ажиллагаанд гарч байна": "Heading out on patrol",
"Шуурхай бүлгийн алба хаагч эргүүлийн автомашинд сууж, объектын тойрон хяналтад гарч байна.": "A rapid-response officer boards the patrol vehicle to make a round of the site.",
"Нэвтрэх хаалганы хяналт": "Gate access control",
"Хамгаалалтын бүсийн хаалгыг алба хаагч нээж, нэвтрэх зөвшөөрлийн дагуу хөдөлгөөнийг зохицуулж байна.": "An officer opens the gate of a protected zone and regulates movement according to permits.",
"Хяналтын төв": "Control room",
"Операторын бүртгэл, хяналт": "Operator logging and monitoring",
"Оператор камерын хяналт тавихын зэрэгцээ дуудлага, мэдээллийн бүртгэлийг тухай бүрт нь хөтөлж байна.": "While monitoring the cameras, the operator logs every call and report as it comes in.",
"Худалдааны төвийн хамгаалалт": "Shopping center security",
"Зочид буудлын хамгаалалт": "Hotel security",
"Хамгаалалтын баг": "The security team",
"Объектын хяналтын цэг": "Site checkpoint",
"Тээврийн хэрэгслийн шалгалт": "Vehicle check",
"Эмэгтэй алба хаагч": "Female officer",
"Тусгай хамгаалалтын бүлэг": "Special protection team",
"Дүрэмт хувцасны тэмдэг": "Uniform badge",
"Алба хаагчийн тусгай хэрэгсэл": "Officer's special equipment",
"Албан ёсны туг": "Official flags",
"Ээлжийн бүртгэл хөтлөх": "Keeping the shift log",
"Эргүүлийн автомашин": "Patrol vehicle",
"Объектын хаалганы хяналт": "Site gate control",
"Хяналтын төвийн бүртгэл": "Control room logging",
"Зураг томруулж үзэх": "View enlarged photo",
"Хаах": "Close",
"Өмнөх зураг": "Previous photo",
"Дараах зураг": "Next photo",
"Өмнөх": "Previous",
"Дараах": "Next",
"Хамтран ажиллах": "Work with us",
"Объектынхоо хамгаалалтыг": "Let's plan your site's",
"хамтдаа төлөвлөе": "security together",
"Хэрэгцээтэй үйлчилгээний чиглэлээ сонгоод үнийн санал хүсэх маягтыг бөглөнө үү. Таны сонголт маягтад автоматаар бичигдэнэ.": "Choose the services you need and fill in the quote request form. Your selection is carried into the form automatically.",
"Үйл ажиллагааны чиглэл": "Our services",
"Хэрэгцээтэй үйлчилгээгээ": "Choose the services",
"сонгоно уу": "you need",
"Нэг буюу хэд хэдэн чиглэлийг сонгоно. Доод талын мөрөнд сонголтын тоо харагдах бөгөөд «Үнийн санал авах» товч идэвхжинэ.": "Select one or more services. The bar below shows how many you have chosen and activates the “Request a quote” button.",
"Оффис, үйлдвэр, агуулах болон бусад объектыг биечилсэн харуул, техник хяналтын хослолоор хамгаална.": "Offices, plants, warehouses and other sites are protected by a combination of on-site guards and technical monitoring.",
"Банкны салбар, АТМ-ийн бүс болон бэлэн мөнгөний эргэлтийн аюулгүй байдлыг тусгай журмаар хангана.": "Bank branches, ATM areas and cash handling are secured under special regulations.",
"Олборлолт, боловсруулах үйлдвэр, нүүрсний кемпийг алслагдсан нөхцөлд туршлагатай багаар 24/7 хамгаална.": "Mines, processing plants and coal camps are guarded 24/7 in remote conditions by an experienced team.",
"Тэсрэх материал, аюултай бодис болон овор ихтэй ачааг маршрутын дагуу дагалдан хамгаална.": "Explosives, hazardous substances and oversized cargo are escorted along the route.",
"Барилгын талбай, бүтээн байгуулалтын объектын материал, техник хэрэгслийн хадгалалт, хяналтыг хариуцна.": "We take charge of storage and oversight of materials and equipment at construction and development sites.",
"Зочид буудал, амралтын газар, худалдааны төвийн үйлчлүүлэгчид болон эд хөрөнгийн аюулгүй байдлыг хангана.": "We keep guests, customers and property safe at hotels, resorts and shopping centers.",
"Концерт, спортын болон олон нийтийн арга хэмжээнд хүн амын урсгал, нэвтрэх хяналтыг зохион байгуулна.": "At concerts, sporting and public events we manage crowd flow and access control.",
"Бэлэн мөнгө, үнэт эдлэл, чухал бичиг баримтын зөөвөрлөлтийг туршлагатай багаар аюулгүй гүйцэтгэнэ.": "Cash, valuables and critical documents are transported safely by an experienced team.",
"Одоогоор": "Currently",
"үйлчилгээ сонгосон": "services selected",
"Сонгосон:": "Selected:",
"үйлчилгээ": "services",
"Сонголтыг цэвэрлэх": "Clear selection",
"Хэрхэн ажилладаг вэ": "How it works",
"Гурван": "Three",
"алхам": "steps",
"Чиглэлээ сонгоно": "Choose your services",
"Объектынхоо онцлогт тохирох нэг буюу хэд хэдэн үйлчилгээний чиглэлийг дээрээс сонгоно.": "Select one or more services above that suit the nature of your site.",
"Маягтыг бөглөнө": "Fill in the form",
"Сонголт тань маягтад урьдчилан тэмдэглэгдсэн байх тул объектын байршил, цагийн хуваарийг нэмж бичнэ.": "Your selection is pre-ticked in the form, so you only add the site location and schedule.",
"Саналыг хүлээн авна": "Receive the proposal",
"Бид тохирсон санал, үнийн тооцоог 24 цагийн дотор хүргүүлнэ.": "We send a tailored proposal and price estimate within 24 hours.",
"Шууд": "Talk to us",
"Маягт бөглөхөөс өмнө тодруулах зүйл байвал ажлын цагаар шууд залгаарай. Яаралтай тохиолдолд 24 цагийн турш хариу өгнө.": "If anything needs clarifying before you fill in the form, call us during working hours. For emergencies we answer around the clock.",
"Бүх холбоо барих мэдээлэл": "All contact details"
};
  var PAGE = {"partner.html": {"ярилцъя": "directly"}};
  var TITLES = {"index.html": "Khos Bilig Security Holding LLC — Contract security services in Mongolia", "gallery.html":         "Photo gallery — KHOS BILIG SECURITY HOLDING LLC", "partner.html":         "Request a quote — KHOS BILIG SECURITY HOLDING LLC"};

  var file = (location.pathname.split('/').pop() || 'index.html');
  var over = PAGE[file] || {};
  function tr(s){ return (over[s] !== undefined) ? over[s] : DICT[s]; }

  var ATTRS = ['alt','aria-label','title','placeholder'];
  var lang = 'mn', applying = false, mnTitle = document.title;

  function walkText(root, fn){
    var w = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode: function(n){
        var p = n.parentNode;
        if(!p) return NodeFilter.FILTER_REJECT;
        var t = p.nodeName;
        if(t === 'SCRIPT' || t === 'STYLE' || t === 'NOSCRIPT') return NodeFilter.FILTER_REJECT;
        return n.nodeValue && n.nodeValue.trim() ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
      }
    });
    var n, list = [];
    while((n = w.nextNode())) list.push(n);
    list.forEach(fn);
  }

  function toEn(root){
    walkText(root, function(n){
      if(n.__kbEn) return;                     // аль хэдийн орчуулсан
      var raw = n.nodeValue, t = raw.trim(), en = tr(t);
      if(en === undefined) return;
      var lead = raw.match(/^\s*/)[0], trail = raw.match(/\s*$/)[0];
      n.__kbMn = raw; n.__kbEn = true;
      n.nodeValue = lead + en + trail;
    });
    var els = root.querySelectorAll ? root.querySelectorAll('*') : [];
    Array.prototype.forEach.call(els, function(el){
      ATTRS.forEach(function(a){
        if(!el.hasAttribute(a)) return;
        if(el.hasAttribute('data-kb-' + a)) return;
        var v = el.getAttribute(a).trim(), en = tr(v);
        if(en === undefined) return;
        el.setAttribute('data-kb-' + a, el.getAttribute(a));
        el.setAttribute(a, en);
      });
    });
  }

  function toMn(root){
    walkText(root, function(n){
      if(n.__kbMn === undefined) return;
      n.nodeValue = n.__kbMn; n.__kbMn = undefined; n.__kbEn = false;
    });
    var els = root.querySelectorAll ? root.querySelectorAll('*') : [];
    Array.prototype.forEach.call(els, function(el){
      ATTRS.forEach(function(a){
        var k = 'data-kb-' + a;
        if(!el.hasAttribute(k)) return;
        el.setAttribute(a, el.getAttribute(k));
        el.removeAttribute(k);
      });
    });
  }

  function setLang(l, save){
    if(l !== 'en' && l !== 'mn') l = 'mn';
    applying = true;
    lang = l;
    if(l === 'en'){ toEn(document.body); document.title = TITLES[file] || mnTitle; }
    else          { toMn(document.body); document.title = mnTitle; }
    document.documentElement.lang = (l === 'en') ? 'en' : 'mn';
    var bs = document.querySelectorAll('.lang button');
    Array.prototype.forEach.call(bs, function(b){ b.classList.toggle('on', b.dataset.l === l); });
    try { if(save !== false) localStorage.setItem('kb-lang', l); } catch(e){}
    applying = false;
  }

  /* ── солигчийн товч ── */
  function mount(){
    var st = document.createElement('style');
    st.textContent = '.lang{display:flex;margin-left:14px;border:1px solid rgba(255,255,255,.22);'
      + 'border-radius:2px;overflow:hidden;flex:none}'
      + '.lang button{background:none;border:0;cursor:pointer;color:rgba(255,255,255,.62);'
      + "font:600 11px/1 'Inter',sans-serif;letter-spacing:.1em;padding:9px 11px;transition:.2s}"
      + '.lang button:hover{color:#fff}'
      + '.lang button.on{background:var(--gold,#B99537);color:#fff}'
      + '@media(max-width:920px){.lang{margin-left:auto;margin-right:4px}}';
    document.head.appendChild(st);

    var box = document.createElement('div');
    box.className = 'lang';
    box.innerHTML = '<button type="button" data-l="mn">МН</button>'
                  + '<button type="button" data-l="en">EN</button>';
    box.addEventListener('click', function(e){
      var b = e.target.closest('button');
      if(b) setLang(b.dataset.l);
    });

    var hdr = document.querySelector('.hdr-in');
    if(!hdr) return;
    var anchor = hdr.querySelector('.hdr-div') || hdr.querySelector('.burger');
    if(anchor) hdr.insertBefore(box, anchor); else hdr.appendChild(box);
  }

  /* ── JS-ээр шинээр үүссэн бичвэрийг мөн орчуулна (сонголтын тоолуур гэх мэт) ── */
  function observe(){
    var mo = new MutationObserver(function(muts){
      if(applying || lang !== 'en') return;
      applying = true;
      muts.forEach(function(m){
        if(m.type === 'characterData'){
          var n = m.target, t = n.nodeValue && n.nodeValue.trim(), en = t && tr(t);
          if(en !== undefined && en !== null && !n.__kbEn){
            var raw = n.nodeValue;
            n.__kbMn = raw; n.__kbEn = true;
            n.nodeValue = raw.match(/^\s*/)[0] + en + raw.match(/\s*$/)[0];
          }
        } else {
          Array.prototype.forEach.call(m.addedNodes, function(n){
            if(n.nodeType === 3){
              var t = n.nodeValue && n.nodeValue.trim(), en = t && tr(t);
              if(en !== undefined && en !== null && !n.__kbEn){
                var raw = n.nodeValue;
                n.__kbMn = raw; n.__kbEn = true;
                n.nodeValue = raw.match(/^\s*/)[0] + en + raw.match(/\s*$/)[0];
              }
            } else if(n.nodeType === 1){
              toEn(n);
            }
          });
        }
      });
      applying = false;
    });
    mo.observe(document.body, {childList:true, subtree:true, characterData:true});
  }

  function boot(){
    mount();
    observe();
    var q = new URLSearchParams(location.search).get('lang');
    var saved = null;
    try { saved = localStorage.getItem('kb-lang'); } catch(e){}
    setLang(q || saved || 'mn', !!q);
  }

  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();
})();
