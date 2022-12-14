GS.dataCache['696004795B7F5046323BC2147AE934FBBF90'] = {
    "uid": "696004795B7F5046323BC2147AE934FBBF90",
    "isLoaded": true,
    "lastModificationTime": 0,
    "items": {
        "name": "Open Settings Menu (Right Click)",
        "type": "data_record",
        "order": 3,
        "category": "commonEvents",
        "id": "696004795B7F5046323BC2147AE934FBBF90",
        "isFolder": false,
        "parentId": "665F7EFC4091674CD6383D3829AD031A9CCC",
        "data": {
            "name": "Open Settings Menu (Right Click)",
            "startCondition": 1,
            "conditionEnabled": true,
            "parallel": true,
            "autoPreload": true,
            "singleInstance": true,
            "inline": false,
            "parameters": [],
            "commands": [
                {
                    "id": "gs.Comment",
                    "params": {
                        "text": "This common event runs in the background in parallel to the scene to allow the player to open the settings menu with right click. It check if the right mouse button has been pressed using the \"Input Data\" command. It stores the state of the right button in the local number variable 0001 \"Right Button\". If that variable contains 1, it means the button is pressed. In that case, it switches to the \"Settings Menu\" scene. That all only happens if the \"In Game\" switch is ON which indicates that we are in a game scene right now and not in another menu."
                    },
                    "indent": 0,
                    "uid": "C3417E5D8B09E9414A886364678C81E97910",
                    "expanded": true
                },
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
                        "textValue": {
                            "scope": 1,
                            "index": 0,
                            "domain": "com.degica.vnm.default"
                        },
                        "switchValue": 0,
                        "valueType": 1,
                        "operation": 0,
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        }
                    },
                    "indent": 0,
                    "uid": "135AED435A2DC64A6A4B785526E151B67787"
                },
                {
                    "id": "gs.Condition",
                    "params": {
                        "variable": {
                            "name": "Settings opened",
                            "index": 4,
                            "scope": 1,
                            "domain": "com.degica.vnm.default",
                            "changed": true
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
                    "uid": "E6F757D035F2044ED83A84A3BD1D6F09508A"
                },
                {
                    "id": "gs.GetInputData",
                    "params": {
                        "field": 12,
                        "state": 0,
                        "targetVariable": {
                            "name": "Right Button",
                            "index": 0,
                            "scope": 0
                        },
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        }
                    },
                    "indent": 2,
                    "uid": "AF3FDDC96A3C164706896DC75D48D6535729"
                },
                {
                    "id": "gs.Condition",
                    "params": {
                        "variable": {
                            "name": "Right Button",
                            "index": 0,
                            "scope": 0
                        },
                        "numberValue": 1,
                        "textValue": {
                            "scope": 1,
                            "index": 0,
                            "domain": "com.degica.vnm.default"
                        },
                        "switchValue": 0,
                        "valueType": 0,
                        "operation": 0,
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        }
                    },
                    "indent": 2,
                    "uid": "A8863E4B9090B246232AD052358E6EFC3D94"
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
                            "name": "In Game",
                            "scope": 1,
                            "index": 0,
                            "domain": "com.degica.vnm.default"
                        },
                        "targetRangeScope": 0,
                        "rangeStart": 0,
                        "rangeEnd": 0,
                        "value": 1,
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        },
                        "targetReferenceDomain": "com.degica.vnm.default"
                    },
                    "indent": 3,
                    "uid": "FD04BE85715D29423E9BFC671AF93842C299"
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
                            "name": "Settings opened",
                            "index": 4,
                            "scope": 1,
                            "domain": "com.degica.vnm.default",
                            "changed": true
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
                    "uid": "57E5B12723CA4049A32B1A756340BF779440"
                },
                {
                    "id": "vn.ChangeScene",
                    "params": {
                        "scene": {
                            "uid": "20047CED82D9664F912885F8DD2F79B3C1E8",
                            "name": "Settings Menu"
                        },
                        "savePrevious": 1,
                        "duration": 20,
                        "erasePictures": 0,
                        "eraseTexts": 0,
                        "eraseVideos": 0,
                        "fieldFlags": {
                            "duration": 1
                        },
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        }
                    },
                    "indent": 3,
                    "uid": "F8F63BD27C88F7417D8851342128058400A6",
                    "expanded": false
                }
            ],
            "index": "696004795B7F5046323BC2147AE934FBBF90",
            "booleanVariables": [
                {
                    "name": "",
                    "index": 0,
                    "scope": 0
                }
            ],
            "numberVariables": [
                {
                    "name": "Right Button",
                    "index": 0,
                    "scope": 0
                }
            ],
            "stringVariables": [
                {
                    "name": "",
                    "index": 0,
                    "scope": 0
                }
            ],
            "conditionSwitch": {
                "name": "In Game",
                "scope": 1,
                "index": 0,
                "changed": true,
                "domain": "com.degica.vnm.default"
            },
            "defaultExpressionId": "BF7CB12110894142C299D341A545C910AA86"
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