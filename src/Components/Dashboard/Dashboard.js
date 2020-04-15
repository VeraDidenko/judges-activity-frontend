import React from 'react';
import * as FlexmonsterReact from 'react-flexmonster/hooks';
import './Dashboard.css';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';

function Dashboard(props) {

    const ref1 = React.useRef();
    const ref2 = React.useRef();   

    let report1 = {
        "dataSource": {
            "type": "csv",
            "filename": "http://localhost:8080/data-activity"
        },
        "slice": {
            "columns": [
                {
                    "uniqueName": "Judge",
                    "filter": {
                        "measure": {
                            "uniqueName": "Total Activity",
                            "aggregation": "sum"
                        },
                        "query": {
                            "top": 10
                        }
                    }
                },
                {
                    "uniqueName": "[Measures]"
                }
            ],
            "measures": [
                {
                    "uniqueName": "Total Activity",
                    "aggregation": "sum"
                }
            ]
        },
        "options": {
            "viewType": "charts",
            "chart": {
                "type": "column",
                "title": "Top 10 by Activity",
                "activeMeasure": {
                    "uniqueName": "Total Activity",
                    "aggregation": "sum"
                }
            }
        }
    };

    let report4 = {
        "dataSource": {
            "type": "csv",
            "filename": "http://localhost:8080/data-activity"
        },
        "slice": {
            "rows": [
                {
                    "uniqueName": "Judge",
                    "filter": {
                        "measure": {
                            "uniqueName": "Score",
                            "aggregation": "sum"
                        },
                        "query": {
                            "top": 10
                        }
                    }
                }
            ],
            "columns": [
                {
                    "uniqueName": "[Measures]"
                }
            ],
            "measures": [
                {
                    "uniqueName": "Score",
                    "aggregation": "sum"
                }
            ]
        },
        "options": {
            "viewType": "charts",
            "chart": {
                "type": "bar_h",
                "title": "Top 10 by Score",
                "activeMeasure": {
                    "uniqueName": "Score",
                    "aggregation": "sum"
                }
            }
        }
    };

    let report3 = {
        "dataSource": {
            "type": "csv",
            "filename": "http://localhost:8080/data-activity"
        },
        "slice": {
            
            "columns": [
                    {
                        "uniqueName": "Judge",
                        "filter": {
                            "measure": {
                                "uniqueName": "Score",
                                "aggregation": "sum"
                            },
                            "query": {
                                "top": 10
                            }
                        }
                    },
                {
                    "uniqueName": "[Measures]"
                }
            ],
            "measures": [
                {
                    "uniqueName": "Score",
                    "aggregation": "sum"
                }
            ]
        },
        "options": {
            "viewType": "charts",
            "chart": {
                "type": "column",
                "title": "Top 10 by Score",
                "activeMeasure": {
                    "uniqueName": "Score",
                    "aggregation": "sum"
                }
            }
        }
    };

    let report2 = {
        "dataSource": {
            "type": "csv",
            "filename": "http://localhost:8080/data-activity"
        },
        "slice": {
            "rows": [
                {
                    "uniqueName": "Judge",
                    "filter": {
                        "measure": {
                            "uniqueName": "Total Activity",
                            "aggregation": "sum"
                        },
                        "query": {
                            "top": 10
                        }
                    }
                }
            ],"columns": [
                {
                    "uniqueName": "[Measures]"
                }
            ],
            "measures": [
                {
                    "uniqueName": "Total Activity",
                    "aggregation": "sum"
                }
            ]
        },
        "options": {
            "viewType": "charts",
            "chart": {
                "type": "bar_h",
                "title": "Top 10 by Activity",
                "activeMeasure": {
                    "uniqueName": "Total Activity",
                    "aggregation": "sum"
                }
            }
        }
    };

    let report5 = {
        "dataSource": {
            "type": "csv",
            "filename": "http://localhost:8080/data-month"
        },
        "slice": {
            "rows": [
                {
                    "uniqueName": "Judge",
                    "filter": {
                        "measure": {
                            "uniqueName": "Month Activity",
                            "aggregation": "sum"
                        },
                        "query": {
                            "top": 10
                        }
                    }
                }
            ],
            "columns": [
                {
                    "uniqueName": "Month"
                },
                {
                    "uniqueName": "[Measures]"
                }
            ],
            "measures": [
                {
                    "uniqueName": "Month Activity",
                    "aggregation": "sum"
                }
            ]
        },
        "options": {
            "viewType": "charts",
            "chart": {
                "type": "pie",
                "title": "Top 10 by Month Activity",
                "pieDataIndex": "3"
            }
        }
    };

    let report6 = {
        "dataSource": {
            "type": "csv",
            "filename": "http://localhost:8080/data-month"
        },
        "slice": {
            "rows": [
                {
                    "uniqueName": "Month"
                }
            ],
            "columns": [
                {
                    "uniqueName": "Judge",
                    "filter": {
                        "measure": {
                            "uniqueName": "Month Activity",
                            "aggregation": "sum"
                        },
                        "query": {
                            "top": 10
                        }
                    }
                },
                {
                    "uniqueName": "[Measures]"
                }
            ],
            "measures": [
                {
                    "uniqueName": "Month Activity",
                    "aggregation": "sum"
                }
            ]
        },
        "options": {
            "viewType": "charts",
            "chart": {
                "type": "column",
                "title": "Top 10 by Month Activity"
            }
        }
    };

    let report9 = {
        "dataSource": {
            "type": "csv",
            "filename": "http://localhost:8080/data-status"
        },
        "slice": {
            "rows": [
                {
                    "uniqueName": "Judge",
                    "filter": {
                        "measure": {
                            "uniqueName": "Total Rejected",
                            "aggregation": "none"
                        },
                        "query": {
                            "top": 10
                        }
                    }
                }
            ],
            "columns": [
                {
                    "uniqueName": "[Measures]"
                }
            ],
            "measures": [
                {
                    "uniqueName": "Total Rejected",
                    "formula": "(sum(\"Accepted\") + sum(\"Rejected\") ) - sum(\"Accepted\")",
                    "caption": "Total Rejected"
                }
            ]
        },
        "options": {
            "viewType": "charts",
            "chart": {
                "type": "bar_h",
                "title": "Top 10 by Total Rejected",
                "activeMeasure": {
                    "uniqueName": "Total Rejected",
                    "aggregation": "none"
                }
            }
        }
    };

    let report10 = {
        "dataSource": {
            "type": "csv",
            "filename": "http://localhost:8080/data-status"
        },
        "slice": {
            "rows": [
                {
                    "uniqueName": "Judge",
                    "filter": {
                        "measure": {
                            "uniqueName": "Total Accepted",
                            "aggregation": "none"
                        },
                        "query": {
                            "top": 10
                        }
                    }
                }
            ],
            "columns": [
                {
                    "uniqueName": "[Measures]"
                }
            ],
            "measures": [
                {
                    "uniqueName": "Total Accepted",
                    "formula": "( sum(\"Accepted\") + sum(\"Rejected\") )- sum(\"Rejected\")",
                    "caption": "Total Accepted"
                }
            ]
        },
        "options": {
            "viewType": "charts",
            "chart": {
                "type": "bar_h",
                "title": "Top 10 by Total Accepted",
                "activeMeasure": {
                    "uniqueName": "Total Accepted",
                    "aggregation": "none"
                }
            }
        }
    };

    const customizeToolbar = (toolbar) => {
        // get all tabs
        var tabs = toolbar.getTabs();
        toolbar.getTabs = function () {
            
            // delete the not needed tabs
            delete tabs[0];
            delete tabs[1];
            delete tabs[2];
            delete tabs[4];
            delete tabs[5];
            delete tabs[6];
            delete tabs[7];
            delete tabs[8];
            delete tabs[9];
            delete tabs[10];
            delete tabs[11];

            return tabs;
        }

    }

    function loadReport1(){
        ref1.current.flexmonster().setReport(report1);
        ref2.current.flexmonster().setReport(report2);
    }

    function loadReport2(){
        ref1.current.flexmonster().setReport(report3);
        ref2.current.flexmonster().setReport(report4);
    }

    function loadReport3(){
        ref1.current.flexmonster().setReport(report5);
        ref2.current.flexmonster().setReport(report6);
    }

    function loadReport5(){
        ref1.current.flexmonster().setReport(report9);
        ref2.current.flexmonster().setReport(report10);
    }

    return <div className="home-container">
                <ButtonGroup aria-label="Basic example" >
                    <Button variant="secondary" onClick={loadReport1}>Top 10 active</Button>
                    <Button variant="secondary" onClick={loadReport2}>Top 10 by score</Button>
                    <Button variant="secondary" onClick={loadReport3}>Top 10 by month activity</Button>
                    <Button variant="secondary" onClick={loadReport5}>Top 10 Total +/-</Button>
                </ButtonGroup>
                <br/>
                <br/>
                <FlexmonsterReact.Pivot 
                    ref={ref1} 
                    toolbar={true} 
                    width="100%"
                    global={{
                        options: {
                            grid: {
                              showFilter: false,
                              dragging: false
                          },chart: {
                            showOneMeasureSelection: false
                          },
                          configuratorButton: false,
                          sorting: false,
                          drillThrough: false
                        },
                        localization: {
                            grid: {
                                blankMember: "Encognito"
                            }
                        }
                    }}
                    report={report1}
                    beforetoolbarcreated={customizeToolbar}
                />
                <br/>
                <FlexmonsterReact.Pivot 
                    ref={ref2} 
                    toolbar={true} 
                    width="100%"
                    global={{
                        options: {
                            grid: {
                              showFilter: false,
                              dragging: false
                          },chart: {
                            showOneMeasureSelection: false
                          },
                          configuratorButton: false,
                          sorting: false,
                          drillThrough: false
                        },
                        localization: {
                            grid: {
                                blankMember: "Encognito"
                            }
                        }
                    }}
                    report={report2}
                    beforetoolbarcreated={customizeToolbar}
                />
                
                
                
           </div>;    
}

export default Dashboard;
