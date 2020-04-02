import React from 'react';
import * as FlexmonsterReact from 'react-flexmonster/hooks';
import './PivotTable.css';

function PivotTable(props) {

    let theme = "";

    const ref = React.useRef();    
    
    const onReportComplete = () => {
        console.log(">>>>", ref.current.flexmonster(), ref.current.flexmonster().getReport());
    }

    const setTheme = (cssUrl) => {
        var prevThemeTags = getPrevTheme();
        var link = document.createElement('link');
        link.href = cssUrl;
        link.rel = "stylesheet";
        link.type = "text/css";
        link["onload"] = function() {
          if (prevThemeTags != null) {
            for (var i = 0; i < prevThemeTags.length; i++) {
              if (window.ActiveXObject || "ActiveXObject" in window) {
                prevThemeTags[i].removeNode(true);
              } else {
                prevThemeTags[i].remove();
              }
            }
          }
        };
        document.body.appendChild(link);
    }
      
    const getPrevTheme = () => {
        var linkTags = document.head.getElementsByTagName("link");
        var prevThemeTags = [];
        for (var i = 0; i < linkTags.length; i++) {
          if (linkTags[i].href.indexOf("flexmonster.min.css") > -1 || linkTags[i].href.indexOf("flexmonster.css") > -1) {
            prevThemeTags.push(linkTags[i]);
          }
        }
        linkTags = document.body.getElementsByTagName("link");
        for (var j = 0; j < linkTags.length; j++) {
          if (linkTags[j].href.indexOf("flexmonster.min.css") > -1 || linkTags[j].href.indexOf("flexmonster.css") > -1) {
            prevThemeTags.push(linkTags[j]);
          }
        }
        return prevThemeTags;
    }

    const customizeToolbar = (toolbar) => {
        // get all tabs
        var tabs = toolbar.getTabs();
        toolbar.getTabs = function () {

            tabs[5].menu = [
                {
                    id: "fm-tab-toggleHeaders",
                    title: "Toggle Headers",
                    handler: toggleHeaders,
                    icon: this.icons.options
                }
            ]
            
            // delete the not needed tabs
            delete tabs[0];
            delete tabs[1];
            delete tabs[2];

            tabs.splice(4, 0, {
                id: "fm-tab-toggleDark",
                title: "Night",
                handler: toggleDarkMode,
                icon: ic
            });

            return tabs;
        }

        var toggleDarkMode = function() {
            // add new functionality
            theme = (theme === "")?"theme/dark/":"";
            setTheme('https://cdn.flexmonster.com/'+theme+'flexmonster.min.css');
        }

        var toggleHeaders = function() {
            var options = ref.current.flexmonster().getOptions({withDefaults: true});
            options.grid.showHeaders = !options.grid.showHeaders;
            ref.current.flexmonster().setOptions(options);
            ref.current.flexmonster().refresh();
        }
        
        var ic = "<svg xmlns=\"http://www.w3.org/2000/svg\" x=\"0px\" y=\"0px\"width=\"50\" height=\"50\"viewBox=\"-10 -10 50 50\"><g class=\"fill-border\"><path d=\"M16 8c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8zM16 21v-10c2.757 0 5 2.243 5 5s-2.243 5-5 5zM16 26c1.105 0 2 0.895 2 2v2c0 1.105-0.895 2-2 2s-2-0.895-2-2v-2c0-1.105 0.895-2 2-2zM16 6c-1.105 0-2-0.895-2-2v-2c0-1.105 0.895-2 2-2s2 0.895 2 2v2c0 1.105-0.895 2-2 2zM30 14c1.105 0 2 0.895 2 2s-0.895 2-2 2h-2c-1.105 0-2-0.895-2-2s0.895-2 2-2h2zM6 16c0 1.105-0.895 2-2 2h-2c-1.105 0-2-0.895-2-2s0.895-2 2-2h2c1.105 0 2 0.895 2 2zM25.899 23.071l1.414 1.414c0.781 0.781 0.781 2.047 0 2.828s-2.047 0.781-2.828 0l-1.414-1.414c-0.781-0.781-0.781-2.047 0-2.828s2.047-0.781 2.828 0zM6.101 8.929l-1.414-1.414c-0.781-0.781-0.781-2.047 0-2.828s2.047-0.781 2.828 0l1.414 1.414c0.781 0.781 0.781 2.047 0 2.828s-2.047 0.781-2.828 0zM25.899 8.929c-0.781 0.781-2.047 0.781-2.828 0s-0.781-2.047 0-2.828l1.414-1.414c0.781-0.781 2.047-0.781 2.828 0s0.781 2.047 0 2.828l-1.414 1.414zM6.101 23.071c0.781-0.781 2.047-0.781 2.828 0s0.781 2.047 0 2.828l-1.414 1.414c-0.781 0.781-2.047 0.781-2.828 0s-0.781-2.047 0-2.828l1.414-1.414z\"></path></g></svg>"
        
    }

    return <div className="home-container">
                <FlexmonsterReact.Pivot 
                    ref={ref} 
                    toolbar={true} 
                    width="100%" 
                    report={{
                        dataSource: {
                          type: "csv",
                          filename: "http://localhost:8080/data"
                      },
                        options: {
                            grid: {
                                type: "flat",
                                showTotals: "off",
                                showGrandTotals: "off", 
                            }
                        },
                      }}
                    reportcomplete={onReportComplete}
                    beforetoolbarcreated={customizeToolbar}
                />
           </div>;    
}

export default PivotTable;
