function googleTranslateElementInit() {
    new google.translate.TranslateElement(
        { 
            pageLanguage: 'en', // Default language is English
            includedLanguages: 'en,hi,te,ta,or,bho,pa,mr,kn,gu,ml,as,bn,ur,sd,ne,ks,doi,kok,mni,sa,my,lo,zh-CN', // Included Indian languages
            layout: google.translate.TranslateElement.InlineLayout.SIMPLE, // Set layout to simple (no toolbar)
        },
        'google_translate_element'
    );
}
