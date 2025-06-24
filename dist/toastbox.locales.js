/*! @preserve
 * toastbox.locales.js
 * version: 1.0.0
 * author: awesometoast
 * license: MIT
 */
(function(global, factory) {
  'use strict';
  if (typeof define === 'function' && define.amd) {
    define(['toastbox'], factory);
  } else if (typeof module === 'object' && module.exports) {
    factory(require('./toastbox'));
  } else {
    factory(global.toastbox);
  }
}(this, function(toastbox) {
  'use strict';

  // locale : Arabic
  // author : Emad Omar
  toastbox.addLocale('ar', {
    OK: 'موافق',
    CANCEL: 'الغاء',
    CONFIRM: 'تأكيد'
  });
  // locale : Azerbaijani
  // author : Valentin Belousov
  toastbox.addLocale('az', {
    OK: 'OK',
    CANCEL: 'İmtina et',
    CONFIRM: 'Təsdiq et'
  });
  // locale : Bulgarian
  // author :  mraiur
  toastbox.addLocale('bg-BG', {
    OK: 'Ок',
    CANCEL: 'Отказ',
    CONFIRM: 'Потвърждавам'
  });
  // locale : Czech
  // author : Lukáš Fryč
  toastbox.addLocale('cs', {
    OK: 'OK',
    CANCEL: 'Zrušit',
    CONFIRM: 'Potvrdit'
  });
  // locale : Danish
  // author : Frederik Alkærsig
  toastbox.addLocale('da', {
    OK: 'OK',
    CANCEL: 'Annuller',
    CONFIRM: 'Accepter'
  });
  // locale : German
  // author : Nick Payne
  toastbox.addLocale('de', {
    OK: 'OK',
    CANCEL: 'Abbrechen',
    CONFIRM: 'Akzeptieren'
  });
  // locale : Greek
  // author : Tolis Emmanouilidis
  toastbox.addLocale('el', {
    OK: 'Εντάξει',
    CANCEL: 'Ακύρωση',
    CONFIRM: 'Επιβεβαίωση'
  });
  // locale : English
  // author : Nick Payne
  toastbox.addLocale('en', {
    OK: 'OK',
    CANCEL: 'Cancel',
    CONFIRM: 'OK'
  });
  // locale : Spanish
  // author : Ian Leckey
  toastbox.addLocale('es', {
    OK: 'OK',
    CANCEL: 'Cancelar',
    CONFIRM: 'Aceptar'
  });
  // locale : Estonian
  // author : Pavel Krõlov
  toastbox.addLocale('et', {
    OK: 'OK',
    CANCEL: 'Katkesta',
    CONFIRM: 'OK'
  });
  // locale : Basque
  // author : Iker Ibarguren
  toastbox.addLocale('eu', {
    OK: 'OK',
    CANCEL: 'Ezeztatu',
    CONFIRM: 'Onartu'
  });
  // locale : Persian
  // author : Touhid Arastu
  toastbox.addLocale('fa', {
    OK: 'قبول',
    CANCEL: 'لغو',
    CONFIRM: 'تایید'
  });
  // locale : Finnish
  // author : Nick Payne
  toastbox.addLocale('fi', {
    OK: 'OK',
    CANCEL: 'Peruuta',
    CONFIRM: 'OK'
  });
  // locale : French
  // author : Nick Payne, Sebastien Andary
  toastbox.addLocale('fr', {
    OK: 'OK',
    CANCEL: 'Annuler',
    CONFIRM: 'Confirmer'
  });
  // locale : Hebrew
  // author : Chen Alon
  toastbox.addLocale('he', {
    OK: 'אישור',
    CANCEL: 'ביטול',
    CONFIRM: 'אישור'
  });
  // locale : Croatian
  // author : Mario Bašić
  toastbox.addLocale('hr', {
    OK: 'OK',
    CANCEL: 'Odustani',
    CONFIRM: 'Potvrdi'
  });
  // locale : Hungarian
  // author : Márk Sági-Kazár
  toastbox.addLocale('hu', {
    OK: 'OK',
    CANCEL: 'Mégsem',
    CONFIRM: 'Megerősít'
  });
  // locale : Indonesian
  // author : Budi Irawan
  toastbox.addLocale('id', {
    OK: 'OK',
    CANCEL: 'Batal',
    CONFIRM: 'OK'
  });
  // locale : Italian
  // author : Mauro
  toastbox.addLocale('it', {
    OK: 'OK',
    CANCEL: 'Annulla',
    CONFIRM: 'Conferma'
  });
  // locale : Japanese
  // author : ms183
  toastbox.addLocale('ja', {
    OK: 'OK',
    CANCEL: 'キャンセル',
    CONFIRM: 'OK'
  });

  // locale : Georgian
  // author : Avtandil Kikabidze aka LONGMAN (@akalongman)
  toastbox.addLocale('ka', {
    OK: 'OK',
    CANCEL: 'გაუქმება',
    CONFIRM: 'დადასტურება'
  });
  // locale : Korean
  // author : rigning
  toastbox.addLocale('ko', {
    OK: 'OK',
    CANCEL: '취소',
    CONFIRM: '확인'
  });
  // locale : Lithuanian
  // author : Tomas
  toastbox.addLocale('lt', {
    OK: 'Gerai',
    CANCEL: 'Atšaukti',
    CONFIRM: 'Patvirtinti'
  });
  // locale : Latvian
  // author : Dmitry Bogatykh, Lauris BH
  toastbox.addLocale('lv', {
    OK: 'Labi',
    CANCEL: 'Atcelt',
    CONFIRM: 'Apstiprināt'
  });
  // locale : Dutch
  // author : Bas ter Vrugt
  toastbox.addLocale('nl', {
    OK: 'OK',
    CANCEL: 'Annuleren',
    CONFIRM: 'Accepteren'
  });
  // locale : Norwegian
  // author : Nils Magnus Englund
  toastbox.addLocale('no', {
    OK: 'OK',
    CANCEL: 'Avbryt',
    CONFIRM: 'OK'
  });
  // locale : Polish
  // author : Szczepan Cieślik
  toastbox.addLocale('pl', {
    OK: 'OK',
    CANCEL: 'Anuluj',
    CONFIRM: 'Potwierdź'
  });
  // locale : Portuguese (Brasil)
  // author : Nick Payne
  toastbox.addLocale('pt-BR', {
    OK: 'OK',
    CANCEL: 'Cancelar',
    CONFIRM: 'Sim'
  });
  // locale : Portuguese
  // author : Cláudio Medina
  toastbox.addLocale('pt', {
    OK: 'OK',
    CANCEL: 'Cancelar',
    CONFIRM: 'Confirmar'
  });
  // locale : Russian
  // author : ionian-wind
  toastbox.addLocale('ru', {
    OK: 'OK',
    CANCEL: 'Отмена',
    CONFIRM: 'Применить'
  });
  // locale : Slovak
  // author : Stano Paška
  toastbox.addLocale('sk', {
    OK: 'OK',
    CANCEL: 'Zrušiť',
    CONFIRM: 'Potvrdiť'
  });
  // locale : Slovenian
  // author : @metalcamp
  toastbox.addLocale('sl', {
    OK: 'OK',
    CANCEL: 'Prekliči',
    CONFIRM: 'Potrdi'
  });
  // locale : Albanian
  // author : Knut Hühne
  toastbox.addLocale('sq', {
    OK: 'OK',
    CANCEL: 'Anulo',
    CONFIRM: 'Prano'
  });
  // locale : Swedish
  // author : Mattias Reichel
  toastbox.addLocale('sv', {
    OK: 'OK',
    CANCEL: 'Avbryt',
    CONFIRM: 'OK'
  });
  // locale : Swahili
  // author : Timothy Anyona
  toastbox.addLocale('sw', {
    OK: 'Sawa',
    CANCEL: 'Ghairi',
    CONFIRM: 'Thibitisha'
  });
  // locale : Tamil
  // author : Kolappan Nathan
  toastbox.addLocale('ta', {
    OK: 'சரி',
    CANCEL: 'ரத்து செய்',
    CONFIRM: 'உறுதி செய்'
  });
  // locale : Thai
  // author : Ishmael๛
  toastbox.addLocale('th', {
    OK: 'ตกลง',
    CANCEL: 'ยกเลิก',
    CONFIRM: 'ยืนยัน'
  });
  // locale : Turkish
  // author : Enes Karaca
  toastbox.addLocale('tr', {
    OK: 'Tamam',
    CANCEL: 'İptal',
    CONFIRM: 'Onayla'
  });
  // locale : Ukrainian
  // author : OlehBoiko
  toastbox.addLocale('uk', {
    OK: 'OK',
    CANCEL: 'Відміна',
    CONFIRM: 'Прийняти'
  });
  // locale : Vietnamese
  // author :  Anh Tu Nguyen
  toastbox.addLocale('vi', {
    OK: 'OK',
    CANCEL: 'Hủy bỏ',
    CONFIRM: 'Xác nhận'
  });
  // locale : Chinese (China / People's Republic of China)
  // author : Nick Payne
  toastbox.addLocale('zh-CN', {
    OK: 'OK',
    CANCEL: '取消',
    CONFIRM: '确认'
  });
  // locale : Chinese (Taiwan / Republic of China)
  // author : Nick Payne
  toastbox.addLocale('zh-TW', {
    OK: 'OK',
    CANCEL: '取消',
    CONFIRM: '確認'
  });

}));
