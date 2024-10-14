
//Constants Definition Part
const TA_ACCENT_LEN = 13;//12 + 1
const TA_AYUDHA_LEN = 1;
const TA_UYIR_LEN = 12 ;
const TA_MEI_LEN = 18;
const TA_AGARAM_LEN = 18;
const TA_SANSKRIT_LEN = 6;
const TA_UYIRMEI_LEN = 216;
const TA_GRANTHA_UYIRMEI_LEN = 24 * 12;
const TA_LETTERS_LEN = 247 + 6 * 12 + 22 + 4 -  TA_AGARAM_LEN - 4; //323

//Individual Vowels
const VOWEL_A = "அ";
const VOWEL_AA = "ஆ";
const VOWEL_I = "இ";
const VOWEL_II = "ஈ";
const VOWEL_U = "உ";
const VOWEL_UU = "ஊ";
const VOWEL_E = "எ";
const VOWEL_EE = "ஏ";
const VOWEL_AI = "ஐ";
const VOWEL_O = "ஒ";
const VOWEL_oo = "ஓ";
const VOWEL_AU = "ஔ";
const UYIR_LETTERS = ["அ", "ஆ", "இ", "ஈ", "உ", "ஊ", "எ", "ஏ", "ஐ", "ஒ", "ஓ", "ஔ"];

// List of letters you can use


const AYTHAM_LETTER = "ஃ";
const AYUDHA_LETTER = '' //self::AYTHAM_LETTER;
const KURIL_LETTERS = ["அ", "இ", "உ", "எ", "ஒ"];
const NEDIL_LETTERS = ["ஆ", "ஈ", "ஊ", "ஏ", "ஓ", "ஐ", "ஔ"];
const DIPTHONG_LETTERS = ["ஐ", "ஔ"];
const PRONOUN_LETTERS = ["அ", "இ", "உ"];
const SUTTEZHUTHTHU = ''//self::PRONOUN_LETTERS;
const QUESTIONSUFFIX_LETTERS = ["ஆ", "ஏ", "ஓ"];
const VINAAEZHUTHTHU = ''//self::QUESTIONSUFFIX_LETTERS;
const VALLINAM_LETTERS  = ["க்", "ச்", "ட்", "த்", "ப்", "ற்"];
const MELLINAM_LETTERS  = ["ங்", "ஞ்", "ண்", "ந்", "ம்", "ன்"];
const IDAYINAM_LETTERS  = ["ய்", "ர்", "ல்", "வ்", "ழ்", "ள்"];
const MEI_LETTERS = [
    "க்",
    "ச்",
    "ட்",
    "த்",
    "ப்",
    "ற்",
    "ஞ்",
    "ங்",
    "ண்",
    "ந்",
    "ம்",
    "ன்",
    "ய்",
    "ர்",
    "ல்",
    "வ்",
    "ழ்",
    "ள்",
];

const ACCENT_SYMBOLS = [
    "", "ா", "ி", "ீ", "ு", "ூ", "ெ", "ே", "ை", "ொ", "ோ", "ௌ", "ஃ"
];

//const ACCENT_AA = self::ACCENT_SYMBOLS[1];
//const ACCENT_I =  self::ACCENT_SYMBOLS[2];
//const ACCENT_U = self::ACCENT_SYMBOLS[3];
//const ACCENT_UU = self::ACCENT_SYMBOLS[4];
//const ACCENT_E = self::ACCENT_SYMBOLS[5];
//const ACCENT_EE = self::ACCENT_SYMBOLS[6];
//const ACCENT_AI = self::ACCENT_SYMBOLS[7];
//const ACCENT_O = self::ACCENT_SYMBOLS[8];
//const ACCENT_OO = self::ACCENT_SYMBOLS[9];
//const ACCENT_AU = self::ACCENT_SYMBOLS[10];

const PULLI_SYMBOLS = ["்"];

const AGARAM_LETTERS = [
    "க",
    "ச",
    "ட",
    "த",
    "ப",
    "ற",
    "ஞ",
    "ங",
    "ண",
    "ந",
    "ம",
    "ன",
    "ய",
    "ர",
    "ல",
    "வ",
    "ழ",
    "ள",
];
const MAYANGOLI_LETTERS = ["ண", "ன", "ந", "ல", "ழ", "ள", "ர", "ற"];
const CONSONANT_KA = "க";
const CONSONANT_NGA = "ங";
const CONSONANT_CA = "ச";
const CONSONANT_JA = "ஜ";
const CONSONANT_NYA = "ஞ";
const CONSONANT_TTA = "ட";
const CONSONANT_NNA = "ண";
const CONSONANT_NNNA = "ன";
const CONSONANT_TA = "த";
const CONSONANT_THA = "த";
const CONSONANT_NA = "ந";
const CONSONANT_PA = "ப";
const CONSONANT_MA = "ம";
const CONSONANT_YA = "ய";
const CONSONANT_RA = "ர";
const CONSONANT_RRA = "ற";
const CONSONANT_LA = "ல";
const CONSONANT_LLA = "ள";
const CONSONANT_LLLA = "ழ";
const CONSONANT_ZHA = "ழ";
const CONSONANT_VA = "வ";

const SANSKRIT_LETTERS = ["ஶ", "ஜ", "ஷ", "ஸ", "ஹ", "க்ஷ"];
const SANSKRIT_MEI_LETTERS = ["ஶ்", "ஜ்", "ஷ்", "ஸ்", "ஹ்", "க்ஷ்"];

const UYIRMEI_LETTERS = [
    "க",
    "கா",
    "கி",
    "கீ",
    "கு",
    "கூ",
    "கெ",
    "கே",
    "கை",
    "கொ",
    "கோ",
    "கௌ",
    "ச",
    "சா",
    "சி",
    "சீ",
    "சு",
    "சூ",
    "செ",
    "சே",
    "சை",
    "சொ",
    "சோ",
    "சௌ",
    "ட",
    "டா",
    "டி",
    "டீ",
    "டு",
    "டூ",
    "டெ",
    "டே",
    "டை",
    "டொ",
    "டோ",
    "டௌ",
    "த",
    "தா",
    "தி",
    "தீ",
    "து",
    "தூ",
    "தெ",
    "தே",
    "தை",
    "தொ",
    "தோ",
    "தௌ",
    "ப",
    "பா",
    "பி",
    "பீ",
    "பு",
    "பூ",
    "பெ",
    "பே",
    "பை",
    "பொ",
    "போ",
    "பௌ",
    "ற",
    "றா",
    "றி",
    "றீ",
    "று",
    "றூ",
    "றெ",
    "றே",
    "றை",
    "றொ",
    "றோ",
    "றௌ",
    "ஞ",
    "ஞா",
    "ஞி",
    "ஞீ",
    "ஞு",
    "ஞூ",
    "ஞெ",
    "ஞே",
    "ஞை",
    "ஞொ",
    "ஞோ",
    "ஞௌ",
    "ங",
    "ஙா",
    "ஙி",
    "ஙீ",
    "ஙு",
    "ஙூ",
    "ஙெ",
    "ஙே",
    "ஙை",
    "ஙொ",
    "ஙோ",
    "ஙௌ",
    "ண",
    "ணா",
    "ணி",
    "ணீ",
    "ணு",
    "ணூ",
    "ணெ",
    "ணே",
    "ணை",
    "ணொ",
    "ணோ",
    "ணௌ",
    "ந",
    "நா",
    "நி",
    "நீ",
    "நு",
    "நூ",
    "நெ",
    "நே",
    "நை",
    "நொ",
    "நோ",
    "நௌ",
    "ம",
    "மா",
    "மி",
    "மீ",
    "மு",
    "மூ",
    "மெ",
    "மே",
    "மை",
    "மொ",
    "மோ",
    "மௌ",
    "ன",
    "னா",
    "னி",
    "னீ",
    "னு",
    "னூ",
    "னெ",
    "னே",
    "னை",
    "னொ",
    "னோ",
    "னௌ",
    "ய",
    "யா",
    "யி",
    "யீ",
    "யு",
    "யூ",
    "யெ",
    "யே",
    "யை",
    "யொ",
    "யோ",
    "யௌ",
    "ர",
    "ரா",
    "ரி",
    "ரீ",
    "ரு",
    "ரூ",
    "ரெ",
    "ரே",
    "ரை",
    "ரொ",
    "ரோ",
    "ரௌ",
    "ல",
    "லா",
    "லி",
    "லீ",
    "லு",
    "லூ",
    "லெ",
    "லே",
    "லை",
    "லொ",
    "லோ",
    "லௌ",
    "வ",
    "வா",
    "வி",
    "வீ",
    "வு",
    "வூ",
    "வெ",
    "வே",
    "வை",
    "வொ",
    "வோ",
    "வௌ",
    "ழ",
    "ழா",
    "ழி",
    "ழீ",
    "ழு",
    "ழூ",
    "ழெ",
    "ழே",
    "ழை",
    "ழொ",
    "ழோ",
    "ழௌ",
    "ள",
    "ளா",
    "ளி",
    "ளீ",
    "ளு",
    "ளூ",
    "ளெ",
    "ளே",
    "ளை",
    "ளொ",
    "ளோ",
    "ளௌ",
];

//const tamil247 =  ;


// # Ref: https://en.wikipedia.org/wiki/Tamil_numerals
// # tamil digits : Apart from the numerals (0-9), Tamil also has numerals for 10, 100 and 1000.
const TAMIL_DIGIT_1TO10 = ["௦", "௧", "௨", "௩", "௪", "௫", "௬", "௭", "௮", "௯", "௰"];
const TAMIL_DIGIT_100 = "௱";
const TAMIL_DIGIT_1000 = "௲";

//const tamil_digits =
//[(num, digit)
//for num, digit in zip(range(0, 11), tamil_digit_1to10)];
//const tamil_digits.extend([(100, tamil_digit_100), (1000, tamil_digit_1000)]);

//# tamil symbols
const _day = "௳";
const _month = "௴";
const _year = "௵";
const _debit = "௶";
const _credit = "௷";
const _rupee = "௹";
const _numeral = "௺";

//const _sri = "\u0bb6\u0bcd\u0bb0\u0bc0";  # SRI - ஶ்ரீ
//const _ksha = "\u0b95\u0bcd\u0bb7";  # KSHA - க்ஷ
//const _ksh = "\u0b95\u0bcd\u0bb7\u0bcd";  # KSH - க்ஷ்
//const _indian_rupee = "₹";
//const TAMIL_SYMBOLS = [
//        self::_day,
//    self::_month,
//self::_year,
//    self::_debit,
//    self::_credit,
//    self::_rupee,
//    self::_numeral,
//    self::_sri,
//    self::_ksha,
//    self::_ksh,
//    self::_indian_rupee,
//];

//## total tamil letters in use, including sanskrit letters
const TAMIL_LETTERS = [
    //## /* Uyir */
    "அ",
    "ஆ",
    "இ",
    "ஈ",
    "உ",
    "ஊ",
    "எ",
    "ஏ",
    "ஐ",
    "ஒ",
    "ஓ",
    "ஔ",
    //##/* Ayuda Ezhuthu */
    "ஃ",
    //## /* Mei */
    "க்",
    "ச்",
    "ட்",
    "த்",
    "ப்",
    "ற்",
    "ஞ்",
    "ங்",
    "ண்",
    "ந்",
    "ம்",
    "ன்",
    "ய்",
    "ர்",
    "ல்",
    "வ்",
    "ழ்",
    "ள்",
    //## /* Agaram */
    //## "க","ச","ட","த","ப","ற","ஞ","ங","ண","ந","ம","ன","ய","ர","ல","வ","ழ","ள",
    //## /* Sanskrit (Vada Mozhi) */
    //## "ஜ","ஷ", "ஸ","ஹ",
    //##/* Sanskrit (Mei) */
    "ஜ்",
    "ஷ்",
    "ஸ்",
    "ஹ்",
    //## /* Uyir Mei */
    "க",
    "கா",
    "கி",
    "கீ",
    "கு",
    "கூ",
    "கெ",
    "கே",
    "கை",
    "கொ",
    "கோ",
    "கௌ",
    "ச",
    "சா",
    "சி",
    "சீ",
    "சு",
    "சூ",
    "செ",
    "சே",
    "சை",
    "சொ",
    "சோ",
    "சௌ",
    "ட",
    "டா",
    "டி",
    "டீ",
    "டு",
    "டூ",
    "டெ",
    "டே",
    "டை",
    "டொ",
    "டோ",
    "டௌ",
    "த",
    "தா",
    "தி",
    "தீ",
    "து",
    "தூ",
    "தெ",
    "தே",
    "தை",
    "தொ",
    "தோ",
    "தௌ",
    "ப",
    "பா",
    "பி",
    "பீ",
    "பு",
    "பூ",
    "பெ",
    "பே",
    "பை",
    "பொ",
    "போ",
    "பௌ",
    "ற",
    "றா",
    "றி",
    "றீ",
    "று",
    "றூ",
    "றெ",
    "றே",
    "றை",
    "றொ",
    "றோ",
    "றௌ",
    "ஞ",
    "ஞா",
    "ஞி",
    "ஞீ",
    "ஞு",
    "ஞூ",
    "ஞெ",
    "ஞே",
    "ஞை",
    "ஞொ",
    "ஞோ",
    "ஞௌ",
    "ங",
    "ஙா",
    "ஙி",
    "ஙீ",
    "ஙு",
    "ஙூ",
    "ஙெ",
    "ஙே",
    "ஙை",
    "ஙொ",
    "ஙோ",
    "ஙௌ",
    "ண",
    "ணா",
    "ணி",
    "ணீ",
    "ணு",
    "ணூ",
    "ணெ",
    "ணே",
    "ணை",
    "ணொ",
    "ணோ",
    "ணௌ",
    "ந",
    "நா",
    "நி",
    "நீ",
    "நு",
    "நூ",
    "நெ",
    "நே",
    "நை",
    "நொ",
    "நோ",
    "நௌ",
    "ம",
    "மா",
    "மி",
    "மீ",
    "மு",
    "மூ",
    "மெ",
    "மே",
    "மை",
    "மொ",
    "மோ",
    "மௌ",
    "ன",
    "னா",
    "னி",
    "னீ",
    "னு",
    "னூ",
    "னெ",
    "னே",
    "னை",
    "னொ",
    "னோ",
    "னௌ",
    "ய",
    "யா",
    "யி",
    "யீ",
    "யு",
    "யூ",
    "யெ",
    "யே",
    "யை",
    "யொ",
    "யோ",
    "யௌ",
    "ர",
    "ரா",
    "ரி",
    "ரீ",
    "ரு",
    "ரூ",
    "ரெ",
    "ரே",
    "ரை",
    "ரொ",
    "ரோ",
    "ரௌ",
    "ல",
    "லா",
    "லி",
    "லீ",
    "லு",
    "லூ",
    "லெ",
    "லே",
    "லை",
    "லொ",
    "லோ",
    "லௌ",
    "வ",
    "வா",
    "வி",
    "வீ",
    "வு",
    "வூ",
    "வெ",
    "வே",
    "வை",
    "வொ",
    "வோ",
    "வௌ",
    "ழ",
    "ழா",
    "ழி",
    "ழீ",
    "ழு",
    "ழூ",
    "ழெ",
    "ழே",
    "ழை",
    "ழொ",
    "ழோ",
    "ழௌ",
    "ள",
    "ளா",
    "ளி",
    "ளீ",
    "ளு",
    "ளூ",
    "ளெ",
    "ளே",
    "ளை",
    "ளொ",
    "ளோ",
    "ளௌ"
    //##/* Sanskrit Uyir-Mei */
    ,
    "ஶ",
    "ஶா",
    "ஶி",
    "ஶீ",
    "ஶு",
    "ஶூ",
    "ஶெ",
    "ஶே",
    "ஶை",
    "ஶொ",
    "ஶோ",
    "ஶௌ",
    "ஜ",
    "ஜா",
    "ஜி",
    "ஜீ",
    "ஜு",
    "ஜூ",
    "ஜெ",
    "ஜே",
    "ஜை",
    "ஜொ",
    "ஜோ",
    "ஜௌ",
    "ஷ",
    "ஷா",
    "ஷி",
    "ஷீ",
    "ஷு",
    "ஷூ",
    "ஷெ",
    "ஷே",
    "ஷை",
    "ஷொ",
    "ஷோ",
    "ஷௌ",
    "ஸ",
    "ஸா",
    "ஸி",
    "ஸீ",
    "ஸு",
    "ஸூ",
    "ஸெ",
    "ஸே",
    "ஸை",
    "ஸொ",
    "ஸோ",
    "ஸௌ",
    "ஹ",
    "ஹா",
    "ஹி",
    "ஹீ",
    "ஹு",
    "ஹூ",
    "ஹெ",
    "ஹே",
    "ஹை",
    "ஹொ",
    "ஹோ",
    "ஹௌ",
    "க்ஷ",
    "க்ஷா",
    "க்ஷி",
    "க்ஷீ",
    "க்ஷு",
    "க்ஷூ",
    "க்ஷெ",
    "க்ஷே",
    "க்ஷை",
    "க்ஷொ",
    "க்ஷோ",
    "க்ஷௌ",
];
