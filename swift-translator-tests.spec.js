const { test, expect } = require('@playwright/test');

// Configuration
const CONFIG = {
  url: 'https://www.swifttranslator.com/',
  timeouts: {
    pageLoad: 2000,
    afterClear: 1000,
    translation: 3000,
    betweenTests: 2000
  },
  selectors: {
    inputField: 'Input Your Singlish Text Here.',
    outputContainer: 'div.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap'
  }
};

// Test Data - Completely New Test Cases
const TEST_DATA = {
  positive: [
    
    {
      tcId: 'Pos_Fun_001',
      name: 'Simple present tense statement',
      input: 'oyaa sathutin innavadha?',
      expected: 'ඔයා සතුටින් ඉන්නවද?',
      category: 'Daily language usage',
      grammar: 'Simple sentence',
      length: 'S'
    },

    {
      tcId: 'Pos_Fun_002',
      name: 'Simple food request',
      input: 'mama pansalee innee.',
      expected: 'මම පන්සලේ ඉන්නේ.',
      category: 'Daily language usage',
      grammar: 'Simple sentence',
      length: 'S'
    },

    {
      tcId: 'Pos_Fun_003',
      name: 'Going home statement',
      input: 'issarahata yanna.',
      expected: 'ඉස්සරහට යන්න.',
      category: 'Daily language usage',
      grammar: 'Simple sentence',
      length: 'S'
    },
    
    
    {
      tcId: 'Pos_Fun_004',
      name: 'Two activities connected',
      input: 'oyaa poddk uthsaha karanna.',
      expected: 'ඔයා පොඩ්ඩ්ක් උත්සහ කරන්න.',
      category: 'Daily language usage',
      grammar: 'Compound sentence',
      length: 'S'
    },

    {
      tcId: 'Pos_Fun_005',
      name: 'Weather condition compound',
      input: 'api iiyee panthi giyaa.',
      expected: 'අපි ඊයේ පන්ති ගියා.',
      category: 'Daily language usage',
      grammar: 'Compound sentence',
      length: 'S'
    },
    
    
    {
      tcId: 'Pos_Fun_006',
      name: 'Conditional complex sentence',
      input: 'oyaata poddak velaava thiyenavaadha maath ekka kathaa karanna?',
      expected: 'ඔයාට පොඩ්ඩක් වෙලාව තියෙනවාද මාත් එක්ක කතා කරන්න?',
      category: 'Daily language usage',
      grammar: 'Complex sentence',
      length: 'M'
    },
    
    
    {
      tcId: 'Pos_Fun_007',
      name: 'Simple question about state',
      input: 'mama adha office gihin passe documents tika check karanavaa.',
      expected: 'මම අද office ගිහින් පස්සෙ documents ටික check කරනවා.',
      category: 'Daily language usage',
      grammar: 'Interrogative (question)',
      length: 'S'
    },

    {
      tcId: 'Pos_Fun_008',
      name: 'Question about time',
      input: 'heta api day out ekak yamu.',
      expected: 'හෙට අපි day out එකක් යමු.',
      category: 'Daily language usage',
      grammar: 'Interrogative (question)',
      length: 'S'
    },

    {
      tcId: 'Pos_Fun_009',
      name: 'Polite question request',
      input: 'adha nam mata amaruyi poddk una vage.',
      expected: 'අද නම් මට අමරුයි පොඩ්ඩ්ක් උන වගෙ.',
      category: 'Greeting / request / response',
      grammar: 'Interrogative (question)',
      length: 'S'
    },
    
   
    {
      tcId: 'Pos_Fun_010',
      name: 'Direct command',
      input: 'mama gedhara enna  hadhannee.',
      expected: 'මම ගෙදර එන්න  හදන්නේ.',
      category: 'Daily language usage',
      grammar: 'Imperative (command)',
      length: 'S'
    },

    {
      tcId: 'Pos_Fun_011',
      name: 'Polite command',
      input: 'mama adha paelaya hitavanavaa .',
      expected: 'මම අද පැලය හිටවනවා .',
      category: 'Greeting / request / response',
      grammar: 'Imperative (command)',
      length: 'S'
    },
    
    
    {
      tcId: 'Pos_Fun_012',
      name: 'Morning greeting',
      input: 'oyaa adha enavadha?',
      expected: 'ඔයා අද එනවද?',
      category: 'Greeting / request / response',
      grammar: 'Simple sentence',
      length: 'S'
    },

    {
      tcId: 'Pos_Fun_013',
      name: 'Affirmative response',
      input: 'eeka dhenna.',
      expected: 'ඒක දෙන්න.',
      category: 'Greeting / request / response',
      grammar: 'Simple sentence',
      length: 'S'
    },
    
    
    {
      tcId: 'Pos_Fun_014',
      name: 'Past tense action',
      input: 'mata adha sathutu naehae.',
      expected: 'මට අද සතුටු නැහැ.',
      category: 'Daily language usage',
      grammar: 'Past tense',
      length: 'S'
    },

    {
      tcId: 'Pos_Fun_015',
      name: 'Future tense plan',
      input: 'mama machine eka open karalaa documents tika baeluvaa.',
      expected: 'මම machine එක open කරලා documents ටික බැලුවා.',
      category: 'Daily language usage',
      grammar: 'Future tense',
      length: 'S'
    },
    
    
    {
      tcId: 'Pos_Fun_016',
      name: 'Simple negation',
      input: 'heta api town ekata gihin  aluth laptop ekk aran emu.',
      expected: 'හෙට අපි town එකට ගිහින්  අලුත් laptop එක්ක් අරන් එමු.',
      category: 'Daily language usage',
      grammar: 'Negation (negative form)',
      length: 'S'
    },

    {
      tcId: 'Pos_Fun_017',
      name: 'Cannot statement',
      input: 'mata eeka karanna baee',
      expected: 'මට ඒක කරන්න බෑ',
      category: 'Daily language usage',
      grammar: 'Negation (negative form)',
      length: 'S'
    },
    
   
    {
      tcId: 'Pos_Fun_018',
      name: 'Plural pronoun usage',
      input: 'oyaata puluvannam adha poddak kalin enna.',
      expected: 'ඔයාට පුලුවන්නම් අද පොඩ්ඩක් කලින් එන්න.',
      category: 'Daily language usage',
      grammar: 'Plural form',
      length: 'S'
    },
    
    
    {
      tcId: 'Pos_Fun_019',
      name: 'Common phrase pattern',
      input: 'adoo ! oyaa meeka hariyata kalaadha ?',
      expected: 'අඩෝ ! ඔයා මේක හරියට කලාද ?',
      category: 'Word combination / phrase pattern',
      grammar: 'Simple sentence',
      length: 'S'
    },
    
    
    {
      tcId: 'Pos_Fun_020',
      name: 'English brand term embedded',
      input: 'eeka hari hari lassanayi.',
      expected: 'ඒක හරි හරි ලස්සනයි.',
      category: 'Mixed Singlish + English',
      grammar: 'Simple sentence',
      length: 'S'
    },

    {
      tcId: 'Pos_Fun_021',
      name: 'Place name preservation',
      input: 'mama adha enne naehae.heta api kathaa karamu. ',
      expected: 'මම අද එන්නෙ නැහැ.හෙට අපි කතා කරමු.',
      category: 'Names / places / common English words',
      grammar: 'Past tense',
      length: 'S'
    },
    
    
    {
      tcId: 'Pos_Fun_022',
      name: 'Exclamation mark handling',
      input: 'adha dhavasema mama vaeda karala hodha vidhihakata mahansiyata pathvunaa.namuth raeeta lamayi hamuvenna puluvan nam ehema hithalaa innavaa.eka mage hitha poddak hari venas karanavaa.',
      expected: 'අද දවසෙම මම වැඩ කරල හොද විදිහකට මහන්සියට පත්වුනා.නමුත් රෑට ලමයි හමුවෙන්න පුලුවන් නම් එහෙම හිතලා ඉන්නවා.එක mage හිත පොඩ්ඩක් හරි වෙනස් කරනවා.',
      category: 'Punctuation / numbers',
      grammar: 'Simple sentence',
      length: 'S'
    },
    
    
    {
      tcId: 'Pos_Fun_023',
      name: 'Currency amount',
      input: 'mama adha office gihin presentation ekak prepare kalaa. email harahaa documents tika team ekata yavala passe meeting ekata join una. ehema karalaa raeeta gedhara aavaa.',
      expected: 'මම අද office ගිහින් presentation එකක් prepare කලා. email හරහා documents ටික team එකට යවල පස්සෙ meeting එකට join උන. එහෙම කරලා රෑට ගෙදර ආවා.',
      category: 'Punctuation / numbers',
      grammar: 'Simple sentence',
      length: 'S'
    },
    
    
    {
      tcId: 'Pos_Fun_024',
      name: 'Daily office work simple sentence conversion.',
      input: 'heta api travel karanna hadhana nisaa adha dhavasema plan karanavaa.',
      expected: 'හෙට අපි travel කරන්න හදන නිසා අද දවසෙම plan කරනවා.',
      category: 'Daily language usage',
      grammar: 'Compound sentence',
      length: 'M'
    }
  ],
  
  negative: [
    {
      tcId: 'Neg_Fun_001',
      name: 'Missing space between words',
      input: 'mama gedrayanavaa.',
      expected: 'මම ගෙදර යනවා.',
      category: 'Typographical error handling',
      grammar: 'Simple sentence',
      length: 'S'
    },

    {
      tcId: 'Neg_Fun_002',
      name: 'Joined compound words',
      input: 'mamagedharainnee.',
      expected: 'මම ගෙදර ඉන්නේ.',
      category: 'Typographical error handling',
      grammar: 'Future tense',
      length: 'S'
    },

    {
      tcId: 'Neg_Fun_003',
      name: 'Mixed spacing issues',
      input: 'mamagedhara 12innee.',
      expected: 'මම ගෙදර ඉන්නේ.',
      category: 'Formatting (spaces / line breaks / paragraph)',
      grammar: 'Simple sentence',
      length: 'S'
    },

    {
      tcId: 'Neg_Fun_004',
      name: 'Line break in sentence',
      input: 'oyaa enavadha???!!!',
      expected: 'ඔයා එනවද?',
      category: 'Formatting (spaces / line breaks / paragraph)',
      grammar: 'Simple sentence',
      length: 'S'
    },

    {
      tcId: 'Neg_Fun_005',
      name: 'Informal slang phrase',
      input: 'mama adha was office aava  nisaa godak buy unaa.',
      expected: 'මම අද  was office ආව  නිසා ගොඩක් busy උනා.',
      category: 'Slang / informal language',
      grammar: 'Simple sentence',
      length: 'S'
    },

    {
      tcId: 'Neg_Fun_006',
      name: 'Colloquial expression',
      input: 'eaa eeka karala matama dunnaa',
      expected: 'එයා  ඒක කරල එයා ට ඩුන්න..',
      category: 'Slang / informal language',
      grammar: 'Interrogative (question)',
      length: 'S'
    },

    {
      tcId: 'Neg_Fun_007',
      name: 'Mixed English with errors',
      input: 'mama adha     gedhara  enne aehae ee nisaa ai ppasse   kathaa     karamu.  methana harihata signal naehae anee. mama oyaata gannamko..',
      expected: 'මම අද ගෙදර  එන්නෙ නැහැ ඒ නිසා    අපි පස්සෙ කතා     කරමු.  මෙතන හරිහට සිග්නල් නැහැ අනේ. මම ඔයාට ගන්නම්කො..',
      category: 'Mixed Singlish + English',
      grammar: 'Past tense',
      length: 'S'
    },

    {
      tcId: 'Neg_Fun_008',
      name: 'Abbreviation in sentence',
      input: 'mama adha edhara enne naehae ee nisaa api passe kathaa karamu.  methana harihata signal naehae anee. mama oyaata gannamko.',
      expected: 'මම අද ගෙදර  එන්නෙ නැහැ ඒ නිසා  අපි පස්සෙ කතා  කරමු.  මෙතන හරිහට සිග්නල් නැහැ අනේ. මම ඔයාට ගන්නම්කො.',
      category: 'Names / places / common English words',
      grammar: 'Simple sentence',
      length: 'S'
    },

    {
      tcId: 'Neg_Fun_009',
      name: 'Question with spacing error',
      input: 'adha dhavasema hitha loku vidhihakata uset unaa.mama monavadha karanne kiyala hithaganna bae.mata eeka hariyta kiyaa gannath baehae anee mandha.',
      expected: 'අද දවසෙම හිත ලොකු විදිහකට upset උනා.මම මොනවද කරන්නේ කියල හිතගන්න බැ.මට ඒක හරිය්ට කියා ගන්නත් බැහැ අනේ මන්ද.',
      category: 'Typographical error handling',
      grammar: 'Interrogative (question)',
      length: 'S'
    },

    {
      tcId: 'Neg_Fun_010',
      name: 'Complex slang statement',
      input: 'ma adha dhaval gedhara enavaa namuth godak  late venavaa.',
      expected: 'මම අද දවල් ගෙදර එනවා නමුත් ගොඩක්  late වෙනවා.',
      grammar: 'Imperative (command)',
      length: 'S'
    }
  ],
  
  ui: {
    tcId: 'Pos_UI_001',
    name: 'Real-time translation updates as typing',
    input: 'mama gedhara ynna inne.',
    partialInput: 'Sinhala Output updates automatically while typing.',
    expectedFull: 'Sinhala Output updates automatically while typing.',
    category: 'Usability flow',
    grammar: 'Present tense',
    length: 'S'
  }
};


class TranslatorPage {
  constructor(page) {
    this.page = page;
  }

  async navigateToSite() {
    await this.page.goto(CONFIG.url);
    await this.page.waitForLoadState('networkidle');
    await this.page.waitForTimeout(CONFIG.timeouts.pageLoad);
  }

  async getInputField() {
    return this.page.getByRole('textbox', { name: CONFIG.selectors.inputField });
  }

  async getOutputField() {
    return this.page
      .locator(CONFIG.selectors.outputContainer)
      .filter({ hasNot: this.page.locator('textarea') })
      .first();
  }

  async clearAndWait() {
    const input = await this.getInputField();
    await input.clear();
    await this.page.waitForTimeout(CONFIG.timeouts.afterClear);
  }

  async typeInput(text) {
    const input = await this.getInputField();
    await input.fill(text);
  }

  async waitForOutput() {
    await this.page.waitForFunction(
      () => {
        const elements = Array.from(
          document.querySelectorAll('.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap')
        );
        const output = elements.find(el => {
          const isInputField = el.tagName === 'TEXTAREA' || el.getAttribute('role') === 'textbox';
          return !isInputField && el.textContent && el.textContent.trim().length > 0;
        });
        return output !== undefined;
      },
      { timeout: 10000 }
    );
    await this.page.waitForTimeout(CONFIG.timeouts.translation);
  }

  async getOutputText() {
    const output = await this.getOutputField();
    const text = await output.textContent();
    return text.trim();
  }

  async performTranslation(inputText) {
    await this.clearAndWait();
    await this.typeInput(inputText);
    await this.waitForOutput();
    return await this.getOutputText();
  }
}


test.describe('SwiftTranslator - Singlish to Sinhala Conversion Tests', () => {
  let translator;

  test.beforeEach(async ({ page }) => {
    translator = new TranslatorPage(page);
    await translator.navigateToSite();
  });

  
  test.describe('Positive Functional Tests', () => {
    for (const testCase of TEST_DATA.positive) {
      test(`${testCase.tcId} - ${testCase.name}`, async () => {
        const actualOutput = await translator.performTranslation(testCase.input);
        expect(actualOutput).toBe(testCase.expected);
        await translator.page.waitForTimeout(CONFIG.timeouts.betweenTests);
      });
    }
  });

  
  test.describe('Negative Functional Tests', () => {
    for (const testCase of TEST_DATA.negative) {
      test(`${testCase.tcId} - ${testCase.name}`, async () => {
        const actualOutput = await translator.performTranslation(testCase.input);
        expect(actualOutput).toBe(testCase.expected);
        await translator.page.waitForTimeout(CONFIG.timeouts.betweenTests);
      });
    }
  });

  
  test.describe('UI Functionality Tests', () => {
    test(`${TEST_DATA.ui.tcId} - ${TEST_DATA.ui.name}`, async ({ page }) => {
      const translator = new TranslatorPage(page);
      const input = await translator.getInputField();
      const output = await translator.getOutputField();

      await translator.clearAndWait();
      
      
      await input.pressSequentially(TEST_DATA.ui.partialInput, { delay: 150 });
      
      
      await page.waitForTimeout(1500);
      
      
      let outputText = await output.textContent();
      expect(outputText.trim().length).toBeGreaterThan(0);
      
      
      await input.pressSequentially(TEST_DATA.ui.input.substring(TEST_DATA.ui.partialInput.length), { delay: 150 });
      
      
      await translator.waitForOutput();
      
      
      outputText = await translator.getOutputText();
      expect(outputText).toBe(TEST_DATA.ui.expectedFull);
      
      await page.waitForTimeout(CONFIG.timeouts.betweenTests);
    });
  });
});
