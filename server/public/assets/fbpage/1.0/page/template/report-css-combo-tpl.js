/**
  Template Module Generated by KissyPie 
 **/
KISSY.add(function(){
    return {"html":"<h4>处理文件列表:</h4>\n{{#if !jobs.length}}\n    <div>\n        没有文件\n    </div>\n{{#else}}\n    <ul class=\"plugin-file-list\">\n        {{#each jobs as job}}\n            <li>\n                <h5><i class=\"icon-file\"></i> {{job.filename}} </h5>\n                <ul class=\"plugin-file-list\">\n                    {{#each job.imports as file}}\n                        <li>\n                            <i class=\"icon-bookmark\"></i>  \n                            {{file}}\n                        </li>\n                    {{/each}}\n                </ul>\n            </li>\n        {{/each}}\n    </ul>\n{{/if}}\n"};
});
