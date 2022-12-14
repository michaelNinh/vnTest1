GS.dataCache['E9DD44587AF7B3469C18397718E39434C2A0'] = {
    "uid": "E9DD44587AF7B3469C18397718E39434C2A0",
    "isLoaded": true,
    "lastModificationTime": 0,
    "items": {
        "name": "Hide UI",
        "type": "data_record",
        "order": 11,
        "category": "commonEvents",
        "id": "E9DD44587AF7B3469C18397718E39434C2A0",
        "isFolder": false,
        "parentId": "665F7EFC4091674CD6383D3829AD031A9CCC",
        "data": {
            "name": "Hide UI",
            "startCondition": 0,
            "conditionEnabled": true,
            "parallel": true,
            "autoPreload": true,
            "singleInstance": true,
            "inline": false,
            "parameters": [],
            "commands": [
                {
                    "id": "gs.Condition",
                    "params": {
                        "variable": {
                            "name": "Backlog Opened",
                            "index": 1,
                            "scope": 1,
                            "changed": true,
                            "domain": "com.degica.vnm.default"
                        },
                        "numberValue": 0,
                        "textValue": "",
                        "switchValue": 0,
                        "valueType": 1,
                        "operation": 0,
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        }
                    },
                    "indent": 0,
                    "uid": "751E685A6AA690461408044189A015765992"
                },
                {
                    "id": "gs.SetTargetMessage",
                    "params": {
                        "id": "gameMessage_message",
                        "numberDomain": "com.degica.vnm.default",
                        "number": 0,
                        "type": 1,
                        "clear": 0
                    },
                    "indent": 1,
                    "uid": "447D2C780319A04AE9688D640E4F4154DFFC"
                },
                {
                    "id": "gs.GetInputData",
                    "params": {
                        "field": 132,
                        "state": 0,
                        "targetVariable": {
                            "name": "H Pressed",
                            "index": 0,
                            "scope": 0,
                            "domain": "com.degica.vnm.default"
                        },
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        }
                    },
                    "indent": 1,
                    "uid": "7E2E83825466B94DE189F4C1C6FA756A6084"
                },
                {
                    "id": "gs.Condition",
                    "params": {
                        "variable": {
                            "name": "H Pressed",
                            "index": 0,
                            "scope": 0,
                            "domain": "com.degica.vnm.default"
                        },
                        "numberValue": 2,
                        "textValue": "",
                        "switchValue": 0,
                        "valueType": 0,
                        "operation": 0,
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        }
                    },
                    "indent": 1,
                    "uid": "6DF546E94BC2454ADD3A92C6E432DE86420A"
                },
                {
                    "id": "gs.ChangeBooleanVariables",
                    "params": {
                        "target": 0,
                        "targetReferenceDomain": "com.degica.vnm.default",
                        "targetReference": {
                            "index": 0,
                            "scope": 1,
                            "domain": "com.degica.vnm.default"
                        },
                        "targetVariable": {
                            "name": "Visible",
                            "index": 0,
                            "scope": 0,
                            "domain": "com.degica.vnm.default"
                        },
                        "targetRangeScope": 0,
                        "rangeStart": 0,
                        "rangeEnd": 0,
                        "value": 2,
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        }
                    },
                    "indent": 2,
                    "uid": "729AAE212734D84D5A6931F354C487713468"
                },
                {
                    "id": "vn.SetObjectData",
                    "params": {
                        "objectType": 6,
                        "number": 0,
                        "numberDomain": "com.degica.vnm.default",
                        "layer": 0,
                        "characterId": null,
                        "field": 4,
                        "numberValue": 0,
                        "textValue": {
                            "scope": 1,
                            "index": 0,
                            "domain": "com.degica.vnm.default"
                        },
                        "switchValue": {
                            "name": "Visible",
                            "index": 0,
                            "scope": 0,
                            "domain": "com.degica.vnm.default"
                        }
                    },
                    "indent": 2,
                    "uid": "AD021D703296714BB57B47A438E6B7A8D6C7"
                },
                {
                    "id": "vn.SetObjectData",
                    "params": {
                        "objectType": 0,
                        "number": 99,
                        "numberDomain": "com.degica.vnm.default",
                        "layer": 0,
                        "characterId": null,
                        "field": 10,
                        "numberValue": 0,
                        "textValue": {
                            "scope": 1,
                            "index": 0,
                            "domain": "com.degica.vnm.default"
                        },
                        "switchValue": {
                            "name": "Visible",
                            "index": 0,
                            "scope": 0,
                            "domain": "com.degica.vnm.default"
                        }
                    },
                    "indent": 2
                },
                {
                    "id": "vn.SetObjectData",
                    "params": {
                        "objectType": 0,
                        "number": 101,
                        "numberDomain": "com.degica.vnm.default",
                        "layer": 0,
                        "characterId": null,
                        "field": 10,
                        "numberValue": 0,
                        "textValue": {
                            "scope": 1,
                            "index": 0,
                            "domain": "com.degica.vnm.default"
                        },
                        "switchValue": {
                            "name": "Visible",
                            "index": 0,
                            "scope": 0,
                            "domain": "com.degica.vnm.default"
                        }
                    },
                    "indent": 2,
                    "uid": "73FF10A9302D77476769E6A66C04B5AC8839"
                },
                {
                    "id": "vn.SetObjectData",
                    "params": {
                        "objectType": 0,
                        "number": 102,
                        "numberDomain": "com.degica.vnm.default",
                        "layer": 0,
                        "characterId": null,
                        "field": 10,
                        "numberValue": 0,
                        "textValue": {
                            "scope": 1,
                            "index": 0,
                            "domain": "com.degica.vnm.default"
                        },
                        "switchValue": {
                            "name": "Visible",
                            "index": 0,
                            "scope": 0,
                            "domain": "com.degica.vnm.default"
                        }
                    },
                    "indent": 2,
                    "uid": "637B44CF6C356547C119FEE7408F3AE283CB"
                },
                {
                    "id": "vn.SetObjectData",
                    "params": {
                        "objectType": 2,
                        "number": 0,
                        "numberDomain": "com.degica.vnm.default",
                        "layer": 0,
                        "characterId": null,
                        "field": 10,
                        "numberValue": 0,
                        "textValue": {
                            "scope": 1,
                            "index": 0,
                            "domain": "com.degica.vnm.default"
                        },
                        "switchValue": {
                            "name": "Visible",
                            "index": 0,
                            "scope": 0,
                            "domain": "com.degica.vnm.default"
                        }
                    },
                    "indent": 2,
                    "uid": "2B2C477922CF5840A0799317D63CD46ACF5D"
                },
                {
                    "id": "vn.SetObjectData",
                    "params": {
                        "objectType": 2,
                        "number": 300,
                        "numberDomain": "com.degica.vnm.default",
                        "layer": 0,
                        "characterId": null,
                        "field": 10,
                        "numberValue": 0,
                        "textValue": {
                            "scope": 1,
                            "index": 0,
                            "domain": "com.degica.vnm.default"
                        },
                        "switchValue": {
                            "name": "Visible",
                            "index": 0,
                            "scope": 0,
                            "domain": "com.degica.vnm.default"
                        }
                    },
                    "indent": 2,
                    "uid": "E4FA3D803D71D0496A288C1648D4BFB4D3E4"
                },
                {
                    "id": "gs.Condition",
                    "params": {
                        "variable": {
                            "name": "Visible",
                            "index": 0,
                            "scope": 0,
                            "domain": "com.degica.vnm.default"
                        },
                        "numberValue": 0,
                        "textValue": "",
                        "switchValue": 0,
                        "valueType": 1,
                        "operation": 0,
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        }
                    },
                    "indent": 1,
                    "uid": "AB209F2F51135143EF492748138C99065A7F"
                },
                {
                    "id": "gs.GetInputData",
                    "params": {
                        "field": 11,
                        "state": 0,
                        "targetVariable": {
                            "name": "Mouse Pressed",
                            "index": 1,
                            "scope": 0,
                            "domain": "com.degica.vnm.default"
                        },
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        }
                    },
                    "indent": 2,
                    "uid": "027D939A0CE5024CB14A10E355EC784D6127"
                },
                {
                    "id": "gs.Condition",
                    "params": {
                        "variable": {
                            "name": "Mouse Pressed",
                            "index": 1,
                            "scope": 0,
                            "domain": "com.degica.vnm.default"
                        },
                        "numberValue": 2,
                        "textValue": "",
                        "switchValue": 0,
                        "valueType": 0,
                        "operation": 0,
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        }
                    },
                    "indent": 2,
                    "uid": "12E4DA649660F3450978D383C15F7F33F9AC"
                },
                {
                    "id": "gs.ChangeBooleanVariables",
                    "params": {
                        "target": 0,
                        "targetReferenceDomain": "com.degica.vnm.default",
                        "targetReference": {
                            "index": 0,
                            "scope": 1,
                            "domain": "com.degica.vnm.default"
                        },
                        "targetVariable": {
                            "name": "Visible",
                            "index": 0,
                            "scope": 0,
                            "domain": "com.degica.vnm.default"
                        },
                        "targetRangeScope": 0,
                        "rangeStart": 0,
                        "rangeEnd": 0,
                        "value": 1,
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        }
                    },
                    "indent": 3,
                    "uid": "89C290BF57F9E449A1997458793460C56C02"
                },
                {
                    "id": "vn.SetObjectData",
                    "params": {
                        "objectType": 0,
                        "number": 99,
                        "numberDomain": "com.degica.vnm.default",
                        "layer": 0,
                        "characterId": null,
                        "field": 10,
                        "numberValue": 0,
                        "textValue": {
                            "scope": 1,
                            "index": 0,
                            "domain": "com.degica.vnm.default"
                        },
                        "switchValue": {
                            "name": "Visible",
                            "index": 0,
                            "scope": 0,
                            "domain": "com.degica.vnm.default"
                        }
                    },
                    "indent": 3,
                    "uid": "C5CC2B8312EB2242B8388E32EFAC4FCED1CF"
                },
                {
                    "id": "vn.SetObjectData",
                    "params": {
                        "objectType": 0,
                        "number": 101,
                        "numberDomain": "com.degica.vnm.default",
                        "layer": 0,
                        "characterId": null,
                        "field": 10,
                        "numberValue": 0,
                        "textValue": {
                            "scope": 1,
                            "index": 0,
                            "domain": "com.degica.vnm.default"
                        },
                        "switchValue": {
                            "name": "Visible",
                            "index": 0,
                            "scope": 0,
                            "domain": "com.degica.vnm.default"
                        }
                    },
                    "indent": 3,
                    "uid": "974F64E73F723449F7798D009AF0184AB9A8"
                },
                {
                    "id": "vn.SetObjectData",
                    "params": {
                        "objectType": 0,
                        "number": 102,
                        "numberDomain": "com.degica.vnm.default",
                        "layer": 0,
                        "characterId": null,
                        "field": 10,
                        "numberValue": 0,
                        "textValue": {
                            "scope": 1,
                            "index": 0,
                            "domain": "com.degica.vnm.default"
                        },
                        "switchValue": {
                            "name": "Visible",
                            "index": 0,
                            "scope": 0,
                            "domain": "com.degica.vnm.default"
                        }
                    },
                    "indent": 3,
                    "uid": "18860D6D157CD4407959E27878D0A548379C"
                },
                {
                    "id": "vn.SetObjectData",
                    "params": {
                        "objectType": 2,
                        "number": 300,
                        "numberDomain": "com.degica.vnm.default",
                        "layer": 0,
                        "characterId": null,
                        "field": 10,
                        "numberValue": 0,
                        "textValue": {
                            "scope": 1,
                            "index": 0,
                            "domain": "com.degica.vnm.default"
                        },
                        "switchValue": {
                            "name": "Visible",
                            "index": 0,
                            "scope": 0,
                            "domain": "com.degica.vnm.default"
                        }
                    },
                    "indent": 3,
                    "uid": "033AD3FB8BD1C247869BD7285C274AC91672"
                },
                {
                    "id": "vn.SetObjectData",
                    "params": {
                        "objectType": 2,
                        "number": 0,
                        "numberDomain": "com.degica.vnm.default",
                        "layer": 0,
                        "characterId": null,
                        "field": 10,
                        "numberValue": 0,
                        "textValue": {
                            "scope": 1,
                            "index": 0,
                            "domain": "com.degica.vnm.default"
                        },
                        "switchValue": {
                            "name": "Visible",
                            "index": 0,
                            "scope": 0,
                            "domain": "com.degica.vnm.default"
                        }
                    },
                    "indent": 3,
                    "uid": "3A7E46751AEF344FBD68B0B9B1748C58730F"
                }
            ],
            "index": "E9DD44587AF7B3469C18397718E39434C2A0",
            "booleanVariables": [
                {
                    "name": "Visible",
                    "index": 0,
                    "scope": 0,
                    "domain": "com.degica.vnm.default"
                },
                {
                    "name": "",
                    "index": 1,
                    "scope": 1
                }
            ],
            "stringVariables": [
                {
                    "name": "",
                    "index": 0,
                    "scope": 0
                }
            ],
            "numberVariables": [
                {
                    "name": "H Pressed",
                    "index": 0,
                    "scope": 0,
                    "domain": "com.degica.vnm.default"
                },
                {
                    "name": "Mouse Pressed",
                    "index": 1,
                    "scope": 0,
                    "domain": "com.degica.vnm.default"
                }
            ],
            "conditionSwitch": {
                "name": "In Game",
                "scope": 1,
                "index": 0,
                "changed": true,
                "domain": "com.degica.vnm.default"
            }
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