$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/features/issuing_company_invoice.feature");
formatter.feature({
  "line": 1,
  "name": "Issuing invoices for companies",
  "description": "In order to avoid errors\r\nAs a Teddysoft employee\r\nI want to brainlessly issue an company invoice with tax included price",
  "id": "issuing-invoices-for-companies",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 7,
  "name": "Successful issuing invoices using tax included prices",
  "description": "",
  "id": "issuing-invoices-for-companies;successful-issuing-invoices-using-tax-included-prices",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "Ｔhe VAT rate is 0.05",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "the tax included price provided is \u003ctax_included\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I issue a company invoice",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I should see the VAT is \u003cVAT\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "the tax excluded price is \u003ctax_excluded\u003e",
  "keyword": "And "
});
formatter.examples({
  "line": 13,
  "name": "",
  "description": "",
  "id": "issuing-invoices-for-companies;successful-issuing-invoices-using-tax-included-prices;",
  "rows": [
    {
      "comments": [
        {
          "line": 14,
          "value": "# VAT \u003d Value Added Tax"
        }
      ],
      "cells": [
        "tax_included",
        "VAT",
        "tax_excluded",
        "notes"
      ],
      "line": 15,
      "id": "issuing-invoices-for-companies;successful-issuing-invoices-using-tax-included-prices;;1"
    },
    {
      "cells": [
        "36000",
        "1714",
        "34286",
        "Refactoring定價"
      ],
      "line": 16,
      "id": "issuing-invoices-for-companies;successful-issuing-invoices-using-tax-included-prices;;2"
    },
    {
      "cells": [
        "17900",
        "852",
        "17048",
        "Scrum早鳥"
      ],
      "line": 17,
      "id": "issuing-invoices-for-companies;successful-issuing-invoices-using-tax-included-prices;;3"
    },
    {
      "cells": [
        "17000",
        "810",
        "16190",
        "Scrum泰迪之友"
      ],
      "line": 18,
      "id": "issuing-invoices-for-companies;successful-issuing-invoices-using-tax-included-prices;;4"
    },
    {
      "cells": [
        "21000",
        "1000",
        "20000",
        "Scrum定價"
      ],
      "line": 19,
      "id": "issuing-invoices-for-companies;successful-issuing-invoices-using-tax-included-prices;;5"
    },
    {
      "cells": [
        "99",
        "5",
        "94",
        "四捨五入案例"
      ],
      "line": 20,
      "id": "issuing-invoices-for-companies;successful-issuing-invoices-using-tax-included-prices;;6"
    },
    {
      "cells": [
        "1",
        "0",
        "1",
        "邊界條件"
      ],
      "line": 21,
      "id": "issuing-invoices-for-companies;successful-issuing-invoices-using-tax-included-prices;;7"
    },
    {
      "cells": [
        "10",
        "0",
        "10",
        "邊界條件"
      ],
      "line": 22,
      "id": "issuing-invoices-for-companies;successful-issuing-invoices-using-tax-included-prices;;8"
    },
    {
      "cells": [
        "11",
        "1",
        "10",
        "邊界條件"
      ],
      "line": 23,
      "id": "issuing-invoices-for-companies;successful-issuing-invoices-using-tax-included-prices;;9"
    },
    {
      "cells": [
        "0",
        "0",
        "0",
        "可以開零元發票"
      ],
      "line": 24,
      "id": "issuing-invoices-for-companies;successful-issuing-invoices-using-tax-included-prices;;10"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 16,
  "name": "Successful issuing invoices using tax included prices",
  "description": "",
  "id": "issuing-invoices-for-companies;successful-issuing-invoices-using-tax-included-prices;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "Ｔhe VAT rate is 0.05",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "the tax included price provided is 36000",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I issue a company invoice",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I should see the VAT is 1714",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "the tax excluded price is 34286",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "0.05",
      "offset": 16
    }
  ],
  "location": "IssuingInvoiceStep.java:19"
});
formatter.result({
  "duration": 82052994,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "36000",
      "offset": 35
    }
  ],
  "location": "IssuingInvoiceStep.java:24"
});
formatter.result({
  "duration": 156534,
  "status": "passed"
});
formatter.match({
  "location": "IssuingInvoiceStep.java:28"
});
formatter.result({
  "duration": 348221,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1714",
      "offset": 24
    }
  ],
  "location": "IssuingInvoiceStep.java:32"
});
formatter.result({
  "duration": 3225022,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "34286",
      "offset": 26
    }
  ],
  "location": "IssuingInvoiceStep.java:38"
});
formatter.result({
  "duration": 64596,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Successful issuing invoices using tax included prices",
  "description": "",
  "id": "issuing-invoices-for-companies;successful-issuing-invoices-using-tax-included-prices;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "Ｔhe VAT rate is 0.05",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "the tax included price provided is 17900",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I issue a company invoice",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I should see the VAT is 852",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "the tax excluded price is 17048",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "0.05",
      "offset": 16
    }
  ],
  "location": "IssuingInvoiceStep.java:19"
});
formatter.result({
  "duration": 68503,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "17900",
      "offset": 35
    }
  ],
  "location": "IssuingInvoiceStep.java:24"
});
formatter.result({
  "duration": 39960,
  "status": "passed"
});
formatter.match({
  "location": "IssuingInvoiceStep.java:28"
});
formatter.result({
  "duration": 10516,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "852",
      "offset": 24
    }
  ],
  "location": "IssuingInvoiceStep.java:32"
});
formatter.result({
  "duration": 51677,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "17048",
      "offset": 26
    }
  ],
  "location": "IssuingInvoiceStep.java:38"
});
formatter.result({
  "duration": 67601,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Successful issuing invoices using tax included prices",
  "description": "",
  "id": "issuing-invoices-for-companies;successful-issuing-invoices-using-tax-included-prices;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "Ｔhe VAT rate is 0.05",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "the tax included price provided is 17000",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I issue a company invoice",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I should see the VAT is 810",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "the tax excluded price is 16190",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "0.05",
      "offset": 16
    }
  ],
  "location": "IssuingInvoiceStep.java:19"
});
formatter.result({
  "duration": 94942,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "17000",
      "offset": 35
    }
  ],
  "location": "IssuingInvoiceStep.java:24"
});
formatter.result({
  "duration": 82023,
  "status": "passed"
});
formatter.match({
  "location": "IssuingInvoiceStep.java:28"
});
formatter.result({
  "duration": 10516,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "810",
      "offset": 24
    }
  ],
  "location": "IssuingInvoiceStep.java:32"
});
formatter.result({
  "duration": 42063,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "16190",
      "offset": 26
    }
  ],
  "location": "IssuingInvoiceStep.java:38"
});
formatter.result({
  "duration": 36054,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Successful issuing invoices using tax included prices",
  "description": "",
  "id": "issuing-invoices-for-companies;successful-issuing-invoices-using-tax-included-prices;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "Ｔhe VAT rate is 0.05",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "the tax included price provided is 21000",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I issue a company invoice",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I should see the VAT is 1000",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "the tax excluded price is 20000",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "0.05",
      "offset": 16
    }
  ],
  "location": "IssuingInvoiceStep.java:19"
});
formatter.result({
  "duration": 78417,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "21000",
      "offset": 35
    }
  ],
  "location": "IssuingInvoiceStep.java:24"
});
formatter.result({
  "duration": 76315,
  "status": "passed"
});
formatter.match({
  "location": "IssuingInvoiceStep.java:28"
});
formatter.result({
  "duration": 15624,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1000",
      "offset": 24
    }
  ],
  "location": "IssuingInvoiceStep.java:32"
});
formatter.result({
  "duration": 55884,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20000",
      "offset": 26
    }
  ],
  "location": "IssuingInvoiceStep.java:38"
});
formatter.result({
  "duration": 41462,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Successful issuing invoices using tax included prices",
  "description": "",
  "id": "issuing-invoices-for-companies;successful-issuing-invoices-using-tax-included-prices;;6",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "Ｔhe VAT rate is 0.05",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "the tax included price provided is 99",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I issue a company invoice",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I should see the VAT is 5",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "the tax excluded price is 94",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "0.05",
      "offset": 16
    }
  ],
  "location": "IssuingInvoiceStep.java:19"
});
formatter.result({
  "duration": 83524,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "99",
      "offset": 35
    }
  ],
  "location": "IssuingInvoiceStep.java:24"
});
formatter.result({
  "duration": 48072,
  "status": "passed"
});
formatter.match({
  "location": "IssuingInvoiceStep.java:28"
});
formatter.result({
  "duration": 35453,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 24
    }
  ],
  "location": "IssuingInvoiceStep.java:32"
});
formatter.result({
  "duration": 59189,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "94",
      "offset": 26
    }
  ],
  "location": "IssuingInvoiceStep.java:38"
});
formatter.result({
  "duration": 40560,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Successful issuing invoices using tax included prices",
  "description": "",
  "id": "issuing-invoices-for-companies;successful-issuing-invoices-using-tax-included-prices;;7",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "Ｔhe VAT rate is 0.05",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "the tax included price provided is 1",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I issue a company invoice",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I should see the VAT is 0",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "the tax excluded price is 1",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "0.05",
      "offset": 16
    }
  ],
  "location": "IssuingInvoiceStep.java:19"
});
formatter.result({
  "duration": 63695,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 35
    }
  ],
  "location": "IssuingInvoiceStep.java:24"
});
formatter.result({
  "duration": 37856,
  "status": "passed"
});
formatter.match({
  "location": "IssuingInvoiceStep.java:28"
});
formatter.result({
  "duration": 9915,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 24
    }
  ],
  "location": "IssuingInvoiceStep.java:32"
});
formatter.result({
  "duration": 33049,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 26
    }
  ],
  "location": "IssuingInvoiceStep.java:38"
});
formatter.result({
  "duration": 34852,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Successful issuing invoices using tax included prices",
  "description": "",
  "id": "issuing-invoices-for-companies;successful-issuing-invoices-using-tax-included-prices;;8",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "Ｔhe VAT rate is 0.05",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "the tax included price provided is 10",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I issue a company invoice",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I should see the VAT is 0",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "the tax excluded price is 10",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "0.05",
      "offset": 16
    }
  ],
  "location": "IssuingInvoiceStep.java:19"
});
formatter.result({
  "duration": 88933,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 35
    }
  ],
  "location": "IssuingInvoiceStep.java:24"
});
formatter.result({
  "duration": 135803,
  "status": "passed"
});
formatter.match({
  "location": "IssuingInvoiceStep.java:28"
});
formatter.result({
  "duration": 11717,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 24
    }
  ],
  "location": "IssuingInvoiceStep.java:32"
});
formatter.result({
  "duration": 36955,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 26
    }
  ],
  "location": "IssuingInvoiceStep.java:38"
});
formatter.result({
  "duration": 59489,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Successful issuing invoices using tax included prices",
  "description": "",
  "id": "issuing-invoices-for-companies;successful-issuing-invoices-using-tax-included-prices;;9",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "Ｔhe VAT rate is 0.05",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "the tax included price provided is 11",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I issue a company invoice",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I should see the VAT is 1",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "the tax excluded price is 10",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "0.05",
      "offset": 16
    }
  ],
  "location": "IssuingInvoiceStep.java:19"
});
formatter.result({
  "duration": 111167,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "11",
      "offset": 35
    }
  ],
  "location": "IssuingInvoiceStep.java:24"
});
formatter.result({
  "duration": 66700,
  "status": "passed"
});
formatter.match({
  "location": "IssuingInvoiceStep.java:28"
});
formatter.result({
  "duration": 14121,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 24
    }
  ],
  "location": "IssuingInvoiceStep.java:32"
});
formatter.result({
  "duration": 87130,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 26
    }
  ],
  "location": "IssuingInvoiceStep.java:38"
});
formatter.result({
  "duration": 50175,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Successful issuing invoices using tax included prices",
  "description": "",
  "id": "issuing-invoices-for-companies;successful-issuing-invoices-using-tax-included-prices;;10",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "Ｔhe VAT rate is 0.05",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "the tax included price provided is 0",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I issue a company invoice",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I should see the VAT is 0",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "the tax excluded price is 0",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "0.05",
      "offset": 16
    }
  ],
  "location": "IssuingInvoiceStep.java:19"
});
formatter.result({
  "duration": 90435,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 35
    }
  ],
  "location": "IssuingInvoiceStep.java:24"
});
formatter.result({
  "duration": 66700,
  "status": "passed"
});
formatter.match({
  "location": "IssuingInvoiceStep.java:28"
});
formatter.result({
  "duration": 11417,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 24
    }
  ],
  "location": "IssuingInvoiceStep.java:32"
});
formatter.result({
  "duration": 57385,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 26
    }
  ],
  "location": "IssuingInvoiceStep.java:38"
});
formatter.result({
  "duration": 33650,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 28,
  "name": "Successful issuing invoices using tax excluded prices",
  "description": "",
  "id": "issuing-invoices-for-companies;successful-issuing-invoices-using-tax-excluded-prices",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 29,
  "name": "Ｔhe VAT rate is 0.05",
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "the tax excluded price provided is \u003ctax_excluded\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I issue a company invoice",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "I should see the VAT is \u003cVAT\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "the tax included price is \u003ctax_included\u003e",
  "keyword": "And "
});
formatter.examples({
  "line": 34,
  "name": "",
  "description": "",
  "id": "issuing-invoices-for-companies;successful-issuing-invoices-using-tax-excluded-prices;",
  "rows": [
    {
      "comments": [
        {
          "line": 35,
          "value": "# VAT \u003d Value Added Tax"
        }
      ],
      "cells": [
        "tax_included",
        "VAT",
        "tax_excluded",
        "notes"
      ],
      "line": 36,
      "id": "issuing-invoices-for-companies;successful-issuing-invoices-using-tax-excluded-prices;;1"
    },
    {
      "cells": [
        "36000",
        "1714",
        "34286",
        "Refactoring定價"
      ],
      "line": 37,
      "id": "issuing-invoices-for-companies;successful-issuing-invoices-using-tax-excluded-prices;;2"
    },
    {
      "cells": [
        "17900",
        "852",
        "17048",
        "Scrum早鳥"
      ],
      "line": 38,
      "id": "issuing-invoices-for-companies;successful-issuing-invoices-using-tax-excluded-prices;;3"
    },
    {
      "cells": [
        "17000",
        "810",
        "16190",
        "Scrum泰迪之友"
      ],
      "line": 39,
      "id": "issuing-invoices-for-companies;successful-issuing-invoices-using-tax-excluded-prices;;4"
    },
    {
      "cells": [
        "21000",
        "1000",
        "20000",
        "Scrum定價"
      ],
      "line": 40,
      "id": "issuing-invoices-for-companies;successful-issuing-invoices-using-tax-excluded-prices;;5"
    },
    {
      "cells": [
        "99",
        "5",
        "94",
        "四捨五入案例"
      ],
      "line": 41,
      "id": "issuing-invoices-for-companies;successful-issuing-invoices-using-tax-excluded-prices;;6"
    },
    {
      "cells": [
        "1",
        "0",
        "1",
        "邊界條件"
      ],
      "line": 42,
      "id": "issuing-invoices-for-companies;successful-issuing-invoices-using-tax-excluded-prices;;7"
    },
    {
      "comments": [
        {
          "line": 43,
          "value": "#  | 10              | 0     | 10           | 此案例不適用     |"
        }
      ],
      "cells": [
        "11",
        "1",
        "10",
        "邊界條件"
      ],
      "line": 44,
      "id": "issuing-invoices-for-companies;successful-issuing-invoices-using-tax-excluded-prices;;8"
    },
    {
      "cells": [
        "12",
        "1",
        "11",
        "邊界條件"
      ],
      "line": 45,
      "id": "issuing-invoices-for-companies;successful-issuing-invoices-using-tax-excluded-prices;;9"
    },
    {
      "cells": [
        "0",
        "0",
        "0",
        "可以開零元發票"
      ],
      "line": 46,
      "id": "issuing-invoices-for-companies;successful-issuing-invoices-using-tax-excluded-prices;;10"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 37,
  "name": "Successful issuing invoices using tax excluded prices",
  "description": "",
  "id": "issuing-invoices-for-companies;successful-issuing-invoices-using-tax-excluded-prices;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 29,
  "name": "Ｔhe VAT rate is 0.05",
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "the tax excluded price provided is 34286",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I issue a company invoice",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "I should see the VAT is 1714",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "the tax included price is 36000",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "0.05",
      "offset": 16
    }
  ],
  "location": "IssuingInvoiceStep.java:19"
});
formatter.result({
  "duration": 121982,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "34286",
      "offset": 35
    }
  ],
  "location": "IssuingInvoiceStep.java:42"
});
formatter.result({
  "duration": 79619,
  "status": "passed"
});
formatter.match({
  "location": "IssuingInvoiceStep.java:28"
});
formatter.result({
  "duration": 22233,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1714",
      "offset": 24
    }
  ],
  "location": "IssuingInvoiceStep.java:32"
});
formatter.result({
  "duration": 1865790,
  "error_message": "java.lang.AssertionError: \nExpected: is \u003c1714\u003e\n     but: was \u003c0\u003e\r\n\tat org.hamcrest.MatcherAssert.assertThat(MatcherAssert.java:20)\r\n\tat org.junit.Assert.assertThat(Assert.java:956)\r\n\tat org.junit.Assert.assertThat(Assert.java:923)\r\n\tat step.IssuingInvoiceStep.lambda$new$3(IssuingInvoiceStep.java:34)\r\n\tat ✽.Then I should see the VAT is 1714(src/test/features/issuing_company_invoice.feature:32)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "36000",
      "offset": 26
    }
  ],
  "location": "IssuingInvoiceStep.java:46"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 38,
  "name": "Successful issuing invoices using tax excluded prices",
  "description": "",
  "id": "issuing-invoices-for-companies;successful-issuing-invoices-using-tax-excluded-prices;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 29,
  "name": "Ｔhe VAT rate is 0.05",
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "the tax excluded price provided is 17048",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I issue a company invoice",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "I should see the VAT is 852",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "the tax included price is 17900",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "0.05",
      "offset": 16
    }
  ],
  "location": "IssuingInvoiceStep.java:19"
});
formatter.result({
  "duration": 89534,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "17048",
      "offset": 35
    }
  ],
  "location": "IssuingInvoiceStep.java:42"
});
formatter.result({
  "duration": 54982,
  "status": "passed"
});
formatter.match({
  "location": "IssuingInvoiceStep.java:28"
});
formatter.result({
  "duration": 13521,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "852",
      "offset": 24
    }
  ],
  "location": "IssuingInvoiceStep.java:32"
});
formatter.result({
  "duration": 182673,
  "error_message": "java.lang.AssertionError: \nExpected: is \u003c852\u003e\n     but: was \u003c0\u003e\r\n\tat org.hamcrest.MatcherAssert.assertThat(MatcherAssert.java:20)\r\n\tat org.junit.Assert.assertThat(Assert.java:956)\r\n\tat org.junit.Assert.assertThat(Assert.java:923)\r\n\tat step.IssuingInvoiceStep.lambda$new$3(IssuingInvoiceStep.java:34)\r\n\tat ✽.Then I should see the VAT is 852(src/test/features/issuing_company_invoice.feature:32)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "17900",
      "offset": 26
    }
  ],
  "location": "IssuingInvoiceStep.java:46"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 39,
  "name": "Successful issuing invoices using tax excluded prices",
  "description": "",
  "id": "issuing-invoices-for-companies;successful-issuing-invoices-using-tax-excluded-prices;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 29,
  "name": "Ｔhe VAT rate is 0.05",
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "the tax excluded price provided is 16190",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I issue a company invoice",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "I should see the VAT is 810",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "the tax included price is 17000",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "0.05",
      "offset": 16
    }
  ],
  "location": "IssuingInvoiceStep.java:19"
});
formatter.result({
  "duration": 116874,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "16190",
      "offset": 35
    }
  ],
  "location": "IssuingInvoiceStep.java:42"
});
formatter.result({
  "duration": 32148,
  "status": "passed"
});
formatter.match({
  "location": "IssuingInvoiceStep.java:28"
});
formatter.result({
  "duration": 10516,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "810",
      "offset": 24
    }
  ],
  "location": "IssuingInvoiceStep.java:32"
});
formatter.result({
  "duration": 169454,
  "error_message": "java.lang.AssertionError: \nExpected: is \u003c810\u003e\n     but: was \u003c0\u003e\r\n\tat org.hamcrest.MatcherAssert.assertThat(MatcherAssert.java:20)\r\n\tat org.junit.Assert.assertThat(Assert.java:956)\r\n\tat org.junit.Assert.assertThat(Assert.java:923)\r\n\tat step.IssuingInvoiceStep.lambda$new$3(IssuingInvoiceStep.java:34)\r\n\tat ✽.Then I should see the VAT is 810(src/test/features/issuing_company_invoice.feature:32)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "17000",
      "offset": 26
    }
  ],
  "location": "IssuingInvoiceStep.java:46"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 40,
  "name": "Successful issuing invoices using tax excluded prices",
  "description": "",
  "id": "issuing-invoices-for-companies;successful-issuing-invoices-using-tax-excluded-prices;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 29,
  "name": "Ｔhe VAT rate is 0.05",
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "the tax excluded price provided is 20000",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I issue a company invoice",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "I should see the VAT is 1000",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "the tax included price is 21000",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "0.05",
      "offset": 16
    }
  ],
  "location": "IssuingInvoiceStep.java:19"
});
formatter.result({
  "duration": 57386,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20000",
      "offset": 35
    }
  ],
  "location": "IssuingInvoiceStep.java:42"
});
formatter.result({
  "duration": 35754,
  "status": "passed"
});
formatter.match({
  "location": "IssuingInvoiceStep.java:28"
});
formatter.result({
  "duration": 10215,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1000",
      "offset": 24
    }
  ],
  "location": "IssuingInvoiceStep.java:32"
});
formatter.result({
  "duration": 151125,
  "error_message": "java.lang.AssertionError: \nExpected: is \u003c1000\u003e\n     but: was \u003c0\u003e\r\n\tat org.hamcrest.MatcherAssert.assertThat(MatcherAssert.java:20)\r\n\tat org.junit.Assert.assertThat(Assert.java:956)\r\n\tat org.junit.Assert.assertThat(Assert.java:923)\r\n\tat step.IssuingInvoiceStep.lambda$new$3(IssuingInvoiceStep.java:34)\r\n\tat ✽.Then I should see the VAT is 1000(src/test/features/issuing_company_invoice.feature:32)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "21000",
      "offset": 26
    }
  ],
  "location": "IssuingInvoiceStep.java:46"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 41,
  "name": "Successful issuing invoices using tax excluded prices",
  "description": "",
  "id": "issuing-invoices-for-companies;successful-issuing-invoices-using-tax-excluded-prices;;6",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 29,
  "name": "Ｔhe VAT rate is 0.05",
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "the tax excluded price provided is 94",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I issue a company invoice",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "I should see the VAT is 5",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "the tax included price is 99",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "0.05",
      "offset": 16
    }
  ],
  "location": "IssuingInvoiceStep.java:19"
});
formatter.result({
  "duration": 134300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "94",
      "offset": 35
    }
  ],
  "location": "IssuingInvoiceStep.java:42"
});
formatter.result({
  "duration": 67601,
  "status": "passed"
});
formatter.match({
  "location": "IssuingInvoiceStep.java:28"
});
formatter.result({
  "duration": 13520,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 24
    }
  ],
  "location": "IssuingInvoiceStep.java:32"
});
formatter.result({
  "duration": 173359,
  "error_message": "java.lang.AssertionError: \nExpected: is \u003c5\u003e\n     but: was \u003c0\u003e\r\n\tat org.hamcrest.MatcherAssert.assertThat(MatcherAssert.java:20)\r\n\tat org.junit.Assert.assertThat(Assert.java:956)\r\n\tat org.junit.Assert.assertThat(Assert.java:923)\r\n\tat step.IssuingInvoiceStep.lambda$new$3(IssuingInvoiceStep.java:34)\r\n\tat ✽.Then I should see the VAT is 5(src/test/features/issuing_company_invoice.feature:32)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "99",
      "offset": 26
    }
  ],
  "location": "IssuingInvoiceStep.java:46"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 42,
  "name": "Successful issuing invoices using tax excluded prices",
  "description": "",
  "id": "issuing-invoices-for-companies;successful-issuing-invoices-using-tax-excluded-prices;;7",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 29,
  "name": "Ｔhe VAT rate is 0.05",
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "the tax excluded price provided is 1",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I issue a company invoice",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "I should see the VAT is 0",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "the tax included price is 1",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "0.05",
      "offset": 16
    }
  ],
  "location": "IssuingInvoiceStep.java:19"
});
formatter.result({
  "duration": 72408,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 35
    }
  ],
  "location": "IssuingInvoiceStep.java:42"
});
formatter.result({
  "duration": 41462,
  "status": "passed"
});
formatter.match({
  "location": "IssuingInvoiceStep.java:28"
});
formatter.result({
  "duration": 13520,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 24
    }
  ],
  "location": "IssuingInvoiceStep.java:32"
});
formatter.result({
  "duration": 56785,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 26
    }
  ],
  "location": "IssuingInvoiceStep.java:46"
});
formatter.result({
  "duration": 320880,
  "error_message": "java.lang.AssertionError: \nExpected: is \u003c1\u003e\n     but: was \u003c0\u003e\r\n\tat org.hamcrest.MatcherAssert.assertThat(MatcherAssert.java:20)\r\n\tat org.junit.Assert.assertThat(Assert.java:956)\r\n\tat org.junit.Assert.assertThat(Assert.java:923)\r\n\tat step.IssuingInvoiceStep.lambda$new$6(IssuingInvoiceStep.java:47)\r\n\tat ✽.And the tax included price is 1(src/test/features/issuing_company_invoice.feature:33)\r\n",
  "status": "failed"
});
formatter.scenario({
  "comments": [
    {
      "line": 43,
      "value": "#  | 10              | 0     | 10           | 此案例不適用     |"
    }
  ],
  "line": 44,
  "name": "Successful issuing invoices using tax excluded prices",
  "description": "",
  "id": "issuing-invoices-for-companies;successful-issuing-invoices-using-tax-excluded-prices;;8",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 29,
  "name": "Ｔhe VAT rate is 0.05",
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "the tax excluded price provided is 10",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I issue a company invoice",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "I should see the VAT is 1",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "the tax included price is 11",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "0.05",
      "offset": 16
    }
  ],
  "location": "IssuingInvoiceStep.java:19"
});
formatter.result({
  "duration": 99749,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 35
    }
  ],
  "location": "IssuingInvoiceStep.java:42"
});
formatter.result({
  "duration": 33050,
  "status": "passed"
});
formatter.match({
  "location": "IssuingInvoiceStep.java:28"
});
formatter.result({
  "duration": 13220,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 24
    }
  ],
  "location": "IssuingInvoiceStep.java:32"
});
formatter.result({
  "duration": 230745,
  "error_message": "java.lang.AssertionError: \nExpected: is \u003c1\u003e\n     but: was \u003c0\u003e\r\n\tat org.hamcrest.MatcherAssert.assertThat(MatcherAssert.java:20)\r\n\tat org.junit.Assert.assertThat(Assert.java:956)\r\n\tat org.junit.Assert.assertThat(Assert.java:923)\r\n\tat step.IssuingInvoiceStep.lambda$new$3(IssuingInvoiceStep.java:34)\r\n\tat ✽.Then I should see the VAT is 1(src/test/features/issuing_company_invoice.feature:32)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "11",
      "offset": 26
    }
  ],
  "location": "IssuingInvoiceStep.java:46"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 45,
  "name": "Successful issuing invoices using tax excluded prices",
  "description": "",
  "id": "issuing-invoices-for-companies;successful-issuing-invoices-using-tax-excluded-prices;;9",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 29,
  "name": "Ｔhe VAT rate is 0.05",
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "the tax excluded price provided is 11",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I issue a company invoice",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "I should see the VAT is 1",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "the tax included price is 12",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "0.05",
      "offset": 16
    }
  ],
  "location": "IssuingInvoiceStep.java:19"
});
formatter.result({
  "duration": 91337,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "11",
      "offset": 35
    }
  ],
  "location": "IssuingInvoiceStep.java:42"
});
formatter.result({
  "duration": 54682,
  "status": "passed"
});
formatter.match({
  "location": "IssuingInvoiceStep.java:28"
});
formatter.result({
  "duration": 15023,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 24
    }
  ],
  "location": "IssuingInvoiceStep.java:32"
});
formatter.result({
  "duration": 263494,
  "error_message": "java.lang.AssertionError: \nExpected: is \u003c1\u003e\n     but: was \u003c0\u003e\r\n\tat org.hamcrest.MatcherAssert.assertThat(MatcherAssert.java:20)\r\n\tat org.junit.Assert.assertThat(Assert.java:956)\r\n\tat org.junit.Assert.assertThat(Assert.java:923)\r\n\tat step.IssuingInvoiceStep.lambda$new$3(IssuingInvoiceStep.java:34)\r\n\tat ✽.Then I should see the VAT is 1(src/test/features/issuing_company_invoice.feature:32)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "12",
      "offset": 26
    }
  ],
  "location": "IssuingInvoiceStep.java:46"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 46,
  "name": "Successful issuing invoices using tax excluded prices",
  "description": "",
  "id": "issuing-invoices-for-companies;successful-issuing-invoices-using-tax-excluded-prices;;10",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 29,
  "name": "Ｔhe VAT rate is 0.05",
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "the tax excluded price provided is 0",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I issue a company invoice",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "I should see the VAT is 0",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "the tax included price is 0",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "0.05",
      "offset": 16
    }
  ],
  "location": "IssuingInvoiceStep.java:19"
});
formatter.result({
  "duration": 92838,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 35
    }
  ],
  "location": "IssuingInvoiceStep.java:42"
});
formatter.result({
  "duration": 45668,
  "status": "passed"
});
formatter.match({
  "location": "IssuingInvoiceStep.java:28"
});
formatter.result({
  "duration": 14421,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 24
    }
  ],
  "location": "IssuingInvoiceStep.java:32"
});
formatter.result({
  "duration": 56785,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 26
    }
  ],
  "location": "IssuingInvoiceStep.java:46"
});
formatter.result({
  "duration": 54982,
  "status": "passed"
});
formatter.scenario({
  "line": 49,
  "name": "A special case to issue an invoice by assigning 10$ to tax included prices first and tax excluded prices second",
  "description": "",
  "id": "issuing-invoices-for-companies;a-special-case-to-issue-an-invoice-by-assigning-10$-to-tax-included-prices-first-and-tax-excluded-prices-second",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 50,
  "name": "Ｔhe VAT rate is 0.05",
  "keyword": "Given "
});
formatter.step({
  "line": 51,
  "name": "the tax included price provided is 10",
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "the tax excluded price provided is 10",
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "I issue a company invoice",
  "keyword": "When "
});
formatter.step({
  "line": 54,
  "name": "I should see the VAT is 1",
  "keyword": "Then "
});
formatter.step({
  "line": 55,
  "name": "the tax included price is 11",
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "the tax excluded price is 10",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "0.05",
      "offset": 16
    }
  ],
  "location": "IssuingInvoiceStep.java:19"
});
formatter.result({
  "duration": 112669,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 35
    }
  ],
  "location": "IssuingInvoiceStep.java:24"
});
formatter.result({
  "duration": 61593,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 35
    }
  ],
  "location": "IssuingInvoiceStep.java:42"
});
formatter.result({
  "duration": 47170,
  "status": "passed"
});
formatter.match({
  "location": "IssuingInvoiceStep.java:28"
});
formatter.result({
  "duration": 11717,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 24
    }
  ],
  "location": "IssuingInvoiceStep.java:32"
});
formatter.result({
  "duration": 195292,
  "error_message": "java.lang.AssertionError: \nExpected: is \u003c1\u003e\n     but: was \u003c0\u003e\r\n\tat org.hamcrest.MatcherAssert.assertThat(MatcherAssert.java:20)\r\n\tat org.junit.Assert.assertThat(Assert.java:956)\r\n\tat org.junit.Assert.assertThat(Assert.java:923)\r\n\tat step.IssuingInvoiceStep.lambda$new$3(IssuingInvoiceStep.java:34)\r\n\tat ✽.Then I should see the VAT is 1(src/test/features/issuing_company_invoice.feature:54)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "11",
      "offset": 26
    }
  ],
  "location": "IssuingInvoiceStep.java:46"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 26
    }
  ],
  "location": "IssuingInvoiceStep.java:38"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 59,
  "name": "A special case to issue an invoice by assigning 10$ to tax excluded prices first and tax included prices second",
  "description": "",
  "id": "issuing-invoices-for-companies;a-special-case-to-issue-an-invoice-by-assigning-10$-to-tax-excluded-prices-first-and-tax-included-prices-second",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 60,
  "name": "Ｔhe VAT rate is 0.05",
  "keyword": "Given "
});
formatter.step({
  "line": 61,
  "name": "the tax excluded price provided is 10",
  "keyword": "And "
});
formatter.step({
  "line": 62,
  "name": "the tax included price provided is 10",
  "keyword": "And "
});
formatter.step({
  "line": 63,
  "name": "I issue a company invoice",
  "keyword": "When "
});
formatter.step({
  "line": 64,
  "name": "I should see the VAT is 0",
  "keyword": "Then "
});
formatter.step({
  "line": 65,
  "name": "the tax included price is 10",
  "keyword": "And "
});
formatter.step({
  "line": 66,
  "name": "the tax excluded price is 10",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "0.05",
      "offset": 16
    }
  ],
  "location": "IssuingInvoiceStep.java:19"
});
formatter.result({
  "duration": 94641,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 35
    }
  ],
  "location": "IssuingInvoiceStep.java:42"
});
formatter.result({
  "duration": 46569,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 35
    }
  ],
  "location": "IssuingInvoiceStep.java:24"
});
formatter.result({
  "duration": 33350,
  "status": "passed"
});
formatter.match({
  "location": "IssuingInvoiceStep.java:28"
});
formatter.result({
  "duration": 16825,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 24
    }
  ],
  "location": "IssuingInvoiceStep.java:32"
});
formatter.result({
  "duration": 90135,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 26
    }
  ],
  "location": "IssuingInvoiceStep.java:46"
});
formatter.result({
  "duration": 173960,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 26
    }
  ],
  "location": "IssuingInvoiceStep.java:38"
});
formatter.result({
  "duration": 71206,
  "status": "passed"
});
});