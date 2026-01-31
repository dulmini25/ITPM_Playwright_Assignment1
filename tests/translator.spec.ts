import { test, expect } from "@playwright/test";

/*POSITIVE TEST CASES (24)*/

const positiveTests = [
  {
    id: "Pos_Fun_0001",
    input: "oyaa hodhin innavadha?",
    expected: "ඔයා හොදින් ඉන්නවද?",
  },
  {
    id: "Pos_Fun_0002",
    input: "mama aluth vaedea patan gaththaa.",
    expected: "මම අලුත් වැඩේ පටන් ගත්තා.",
  },
  {
    id: "Pos_Fun_0003",
    input: "karuNaakarala mata podi information ekak dhenna puluvandha?",
    expected: "කරුණාකරල මට පොඩි information එකක් දෙන්න පුලුවන්ද?",
  },
  {
    id: "Pos_Fun_0004",
    input: "poddak idhapan",
    expected: "පොඩ්ඩක් ඉදපන්",
  },
  {
    id: "Pos_Fun_0005",
    input: "api adha rae yanna balamu.",
    expected: "අපි අද රැ යන්න බලමු.",
  },
  {
    id: "Pos_Fun_0006",
    input: "mama kadeata adha giyaa saha passe gedhara aavaa",
    expected: "මම කඩේට අද ගියා සහ පස්සෙ ගෙදර ආවා",
  },
  {
    id: "Pos_Fun_0007",
    input: "oyaa adha gedhara enavanam api ekka dinner yamu.",
    expected: "ඔයා අද ගෙදර එනවනම් අපි එක්ක dinner යමු.",
  },
  {
    id: "Pos_Fun_0008",
    input: "mama adha vaedata yanne nae.",
    expected: "මම අද වැඩට යන්නෙ නැ.",
  },
  {
    id: "Pos_Fun_0009",
    input: "api okkoma panthiyata ekata yamu.",
    expected: "අපි ඔක්කොම පන්තියට එකට යමු.",
  },
  {
    id: "Pos_Fun_0010",
    input: "suba dhavasak, oyaata kohomadha?",
    expected: "සුබ දවසක්, ඔයාට කොහොමද?",
  },
  {
    id: "Pos_Fun_0011",
    input: "mama WhatsApp eka open karala message ekak yavannam.",
    expected: "මම WhatsApp එක open කරල message එකක් යවන්නම්",
  },
  {
    id: "Pos_Fun_0012",
    input: "api galkisse verala paeththata heta yamu.",
    expected: "අපි ගල්කිස්සෙ වෙරල පැත්තට හෙට යමු.",
  },
  {
    id: "Pos_Fun_0013",
    input: "mata Rs. 2500 vagee gevimak heta karanna thiyenavaa!",
    expected: "මට Rs. 2500 වගේ ගෙවිමක් හෙට කරන්න තියෙනවා!",
  },
  {
    id: "Pos_Fun_0014",
    input: "mama TikTok video ekak baeluvaa eeka mama oyaatath send karaa gihin balannakoo",
    expected: "මම TikTok video එකක් බැලුවා ඒක මම ඔයාටත් send කරා ගිහින් බලන්නකෝ",
  },
  {
    id: "Pos_Fun_0015",
    input: "api Colombo town ekata giyaa iita passe gall face  beach gihin aavaa",
    expected: "අපි Colombo town එකට ගියා ඊට පස්සෙ gall face  beach ගිහින් ආවා",
  },
  {
    id: "Pos_Fun_0016",
    input: "mama 2026-01-10 dhavasea travel karanna hithaagena innava.",
    expected: "මම 2026-01-10 දවසේ travel කරන්න හිතාගෙන ඉන්නව",
  },
  {
    id: "Pos_Fun_0017",
    input: "api adha 7.30 AM ekata dhaala thiyana MS Teams meeting ekata yanavaa.",
    expected: "අපි අද 7.30 AM එකට දාල තියන MS Teams meeting එකට යනවා.",
  },
  {
    id: "Pos_Fun_0018",
    input: "mama adha aththammalaagea    gedhara   innava.",
    expected: "මම අද අත්තම්මලාගේ    ගෙදර   ඉන්නව.",
  },
  {
    id: "Pos_Fun_0019",
    input: "mama adha gedhara yanavaa\noyath enavadha?",
    expected: "මම අද ගෙදර යනවා\nඔයත් එනවද?",
  },
  {
    id: "Pos_Fun_0020",
    input: "mama adha udhea office giyaa. traffic nisaa parakku unaa. passe meeting ekak thibunaa. eken passe mama documents tika email karala yaevvaa. raee gedhara aevilla poddak relax unaa.",
    expected:
      "මම අද උදේ office ගියා. traffic නිසා පරක්කු උනා. පස්සෙ meeting එකක් තිබුනා. එකෙන් පස්සෙ මම documents ටික email කරල යැව්වා. රෑ ගෙදර ඇවිල්ල පොඩ්ඩක් relax උනා.",
  },
  {
    id: "Pos_Fun_0021",
    input: "varthamaanaye minisun siiGhrayen dhiyunu veminpavathi. thaakshanaya Bhaavitha karana akaaraya Lamayi godak igena ganiminsitiyi. edhinedhaa jivithayedhi viviDha Bhaashaa kathaa kiriima menma translator Bhaavithayen Bhaashaavan hariyata pahasuven igeniimata haekiyi.",
    expected:
      "වර්තමානයෙ මිනිසුන් සීඝ්‍රයෙන් දියුනු වෙමින්පවති. තාක්ශනය භාවිත කරන අකාරය ළමයි ගොඩක් ඉගෙන ගනිමින්සිටියි.  එදිනෙදා ජිවිතයෙදි විවිධ භාශා කතා කිරීම මෙන්ම translator භාවිතයෙන් භාශාවන් හරියට පහසුවෙන් ඉගෙනීමට හැකියි.",
  },
  {
    id: "Pos_Fun_0022",
    input: "ehaa paare thiyena kadea haal 5kg k Rs.1200 k kiyala liyalaa thibunaa",
    expected: "එහා පාරෙ තියෙන කඩේ හාල් 5kg ක් Rs.1200 ක් කියල ලියලා තිබුනා",
  },
  {
    id: "Pos_Fun_0023",
    input: "oba aethulu pavulea siyalu dhenaatama suBha aluth avurudhdhak veavaa!",
    expected: "ඔබ ඇතුලු පවුලේ සියලු දෙනාටම සුභ අලුත් අවුරුද්දක් වේවා!",
  },
  {
    id: "Pos_Fun_0024",
    input: "panthiya patan aran thiyenne, ikmanata yanna!",
    expected: "පන්තිය පටන් අරන් තියෙන්නෙ, ඉක්මනට යන්න!",
  },
];

/* NEGATIVE TEST CASES*/

const negativeTests = [
  {
    id: "Neg_Fun_0001",
    input: "mama heta nuvra ynva",
    expected: "මම හෙට නුවර යනවා",
  },
  {
    id: "Neg_Fun_0002",
    input: "mamaofficeyannalaesthivenavaa",
    expected: "මම office යන්න ලැස්ති වෙනවා",
  },
  {
    id: "Neg_Fun_0003",
    input: "oyaa anivaren mage potha heta genath dhennamokadhaheta thamaa viBhaagaya",
    expected: "ඔයා අනිවාරෙන් මාගෙ පොත හෙට ගෙනත් දෙන්න මොකද හෙට තමා විභාගය",
  },
  {
    id: "Neg_Fun_0004",
    input: "mata oyage Id eka balanna dhenna",
    expected: "මට ඔයාගෙ ID එක බලන්න දෙන්න",
  },
  {
    id: "Neg_Fun_0005",
    input: "api adha     pansal        yamu nedha?   adha      pooya dhawasak",
    expected: "අපි අද පන්සල් යමු නේද? අද පෝය දවසක්",
  },
  {
    id: "Neg_Fun_0006",
    input: "mama @adha gedhara yanna *inne",
    expected: "මම අද ගෙදර යන්න ඉන්නේ",
  },
  {
    id: "Neg_Fun_0007",
    input: "mata lassana gavuuumak haaambunaaa",
    expected: "මට ලස්සන ගවුමක් හම්බුනා",
  },
  {
    id: "Neg_Fun_0008",
    input: "oya anivaren enawamanam api heta wandana gamana pitath wemu",
    expected: "ඔයා අනිවාරෙන් එනවමනම් අපි හෙට වන්දනා ගමන පිටත් වෙමු",
  },
  {
    id: "Neg_Fun_0009",
    input: "suba dhawasak  vevaa😊",
    expected: "සුබ දවසක්  වේවා",
  },
  {
    id: "Neg_Fun_0010",
    input: "suba dhavasak vevaa. obagea otp ankaya sms,mms,qr lesata labagatha haekiyi",
    expected: "සුබ දවසක් වෙවා. ඔබගේ OTP අන්කය SMS,MMS,QR ලෙසට ලබගත හැකියි",
  },
];

/* 
   COMBINE ALL TESTS
*/

const allTests = [...positiveTests, ...negativeTests];

/* 
   RUN ALL TEST CASES*/

for (const tc of allTests) {
  test(`${tc.id} - Full Output Translation Test`, async ({ page }) => {
    await page.goto("https://www.swifttranslator.com/");

    
    const inputBox = page.locator("textarea").first();
    await inputBox.fill(tc.input);

    
    const outputDiv = page.locator("div").filter({
      hasText: tc.expected,
    });

    
    await expect(outputDiv.first()).toBeVisible({ timeout: 30000 });
  });
}

/*UI TEST CASE (Pos_UI_0001) */

test("Pos_UI_0001 - Clear button should reset input and output", async ({
  page,
}) => {
  await page.goto("https://www.swifttranslator.com/");

  
  const inputBox = page.locator("textarea").first();
  await inputBox.fill("mama nivaaduvata apea gedhara yanavaa. apea ammaa rasakaevili hadhanavaa kivuvaa");

  
  const outputDiv = page.locator("div").filter({
    hasText: "ගෙදර",
  });

  await expect(outputDiv.first()).toBeVisible({ timeout: 15000 });

  
  const clearBtn = page.getByLabel("Clear");
  await clearBtn.click();

  await expect(inputBox).toHaveValue("");

  await expect(outputDiv.first()).not.toBeVisible({ timeout: 10000 });
});