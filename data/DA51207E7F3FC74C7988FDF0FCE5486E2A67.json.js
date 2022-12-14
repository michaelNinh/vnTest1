GS.dataCache['DA51207E7F3FC74C7988FDF0FCE5486E2A67'] = {
    "uid": "DA51207E7F3FC74C7988FDF0FCE5486E2A67",
    "isLoaded": true,
    "lastModificationTime": 0,
    "items": {
        "name": "Hide Log",
        "type": "data_record",
        "order": 12,
        "category": "commonEvents",
        "id": "DA51207E7F3FC74C7988FDF0FCE5486E2A67",
        "isFolder": false,
        "parentId": "665F7EFC4091674CD6383D3829AD031A9CCC",
        "data": {
            "name": "Hide Log",
            "startCondition": 0,
            "conditionEnabled": false,
            "parallel": false,
            "autoPreload": true,
            "singleInstance": true,
            "inline": false,
            "parameters": [],
            "commands": [
                {
                    "id": "vn.BacklogVisibility",
                    "params": {
                        "visible": 0,
                        "backgroundVisible": 1
                    },
                    "indent": 0,
                    "uid": "E246049F21C2A848483A869717AC5B738E09"
                },
                {
                    "id": "gs.EraseHotspot",
                    "params": {
                        "numberDomain": "com.degica.vnm.default",
                        "number": 88
                    },
                    "indent": 0,
                    "uid": "2A2EA18763BD3542431BF1C51E8575C7713F"
                },
                {
                    "id": "gs.ErasePicture",
                    "params": {
                        "numberDomain": "com.degica.vnm.default",
                        "number": 88,
                        "duration": 0,
                        "waitForCompletion": 1,
                        "easing": {
                            "type": 0,
                            "inOut": 1
                        },
                        "animation": {
                            "type": 1,
                            "movement": 0,
                            "mask": {
                                "graphic": null,
                                "vague": 30
                            }
                        },
                        "fieldFlags": {
                            "duration": 1
                        }
                    },
                    "indent": 0,
                    "uid": "623D1E6D8554F044109A12F45D731D7A546F"
                },
                {
                    "id": "gs.ChangeBooleanVariables",
                    "params": {
                        "target": 0,
                        "targetReference": {
                            "scope": 1,
                            "index": 0,
                            "domain": "com.degica.vnm.default"
                        },
                        "targetVariable": {
                            "name": "Backlog Opened",
                            "index": 1,
                            "scope": 1,
                            "changed": true,
                            "domain": "com.degica.vnm.default"
                        },
                        "targetRangeScope": 0,
                        "rangeStart": 0,
                        "rangeEnd": 0,
                        "value": 0,
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        },
                        "targetReferenceDomain": "com.degica.vnm.default"
                    },
                    "indent": 0,
                    "uid": "ABD4702E849995420A9A93324FC30B7C3523"
                }
            ],
            "index": "DA51207E7F3FC74C7988FDF0FCE5486E2A67",
            "booleanVariables": [
                {
                    "name": "",
                    "index": 0,
                    "scope": 0
                }
            ],
            "numberVariables": [
                {
                    "name": "",
                    "index": 0,
                    "scope": 0
                }
            ]
        },
        "localizableStrings": {}
    },
    "summary": [
        "name",
        "type",
        "order"
    ],
    "externalItems": []
}