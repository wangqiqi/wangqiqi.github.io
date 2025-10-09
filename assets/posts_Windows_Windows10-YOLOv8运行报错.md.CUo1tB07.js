import{_ as a,c as n,o as i,a2 as p}from"./chunks/framework.BHFiY1p-.js";const e="/assets/image.lZuwCfNp.png",u=JSON.parse('{"title":"Windows10 YOLOv8运行报错","description":"","frontmatter":{"title":"Windows10 YOLOv8运行报错","date":"2025-01-01T16:55:29.000Z","categories":["Windows","Pytorch","运维"],"tags":["Pytorch","Windows","Yolov8"]},"headers":[],"relativePath":"posts/Windows/Windows10-YOLOv8运行报错.md","filePath":"posts/Windows/Windows10-YOLOv8运行报错.md","lastUpdated":1759744117000}'),t={name:"posts/Windows/Windows10-YOLOv8运行报错.md"};function l(o,s,r,c,h,d){return i(),n("div",null,[...s[0]||(s[0]=[p(`<p>问题如下：</p><p>Windows10 运行 YOLOv8 出现如下错误：</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>Traceback (most recent call last):</span></span>
<span class="line"><span>  File &quot;&lt;string&gt;&quot;, line 1, in &lt;module&gt;</span></span>
<span class="line"><span>  File &quot;D:\\anaconda3\\envs\\yolov8\\Lib\\multiprocessing\\spawn.py&quot;, line 122, in spawn_main</span></span>
<span class="line"><span>    exitcode = _main(fd, parent_sentinel)</span></span>
<span class="line"><span>               ^^^^^^^^^^^^^^^^^^^^^^^^^^</span></span>
<span class="line"><span>  File &quot;D:\\anaconda3\\envs\\yolov8\\Lib\\multiprocessing\\spawn.py&quot;, line 131, in _main</span></span>
<span class="line"><span>    prepare(preparation_data)</span></span>
<span class="line"><span>  File &quot;D:\\anaconda3\\envs\\yolov8\\Lib\\multiprocessing\\spawn.py&quot;, line 242, in prepare</span></span>
<span class="line"><span>    _fixup_main_from_path(data[&#39;init_main_from_path&#39;])</span></span>
<span class="line"><span>  File &quot;D:\\anaconda3\\envs\\yolov8\\Lib\\multiprocessing\\spawn.py&quot;, line 293, in _fixup_main_from_path</span></span>
<span class="line"><span>    main_content = runpy.run_path(main_path,</span></span>
<span class="line"><span>                   ^^^^^^^^^^^^^^^^^^^^^^^^^</span></span>
<span class="line"><span>  File &quot;&lt;frozen runpy&gt;&quot;, line 291, in run_path</span></span>
<span class="line"><span>  File &quot;&lt;frozen runpy&gt;&quot;, line 98, in _run_module_code</span></span>
<span class="line"><span>  File &quot;&lt;frozen runpy&gt;&quot;, line 88, in _run_code</span></span>
<span class="line"><span>  File &quot;F:\\workspace\\yolov8\\train.py&quot;, line 8, in &lt;module&gt;</span></span>
<span class="line"><span>    results = model.train(data=&quot;fsd.yaml&quot;, epochs=200, batch=16) </span></span>
<span class="line"><span>              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^</span></span>
<span class="line"><span>  File &quot;D:\\anaconda3\\envs\\yolov8\\Lib\\site-packages\\ultralytics\\engine\\model.py&quot;, line 377, in train</span></span>
<span class="line"><span>    self.trainer.train()</span></span>
<span class="line"><span>  File &quot;D:\\anaconda3\\envs\\yolov8\\Lib\\site-packages\\ultralytics\\engine\\trainer.py&quot;, line 192, in train</span></span>
<span class="line"><span>    self._do_train(world_size)</span></span>
<span class="line"><span>  File &quot;D:\\anaconda3\\envs\\yolov8\\Lib\\site-packages\\ultralytics\\engine\\trainer.py&quot;, line 294, in _do_train</span></span>
<span class="line"><span>    self._setup_train(world_size)</span></span>
<span class="line"><span>  File &quot;D:\\anaconda3\\envs\\yolov8\\Lib\\site-packages\\ultralytics\\engine\\trainer.py&quot;, line 259, in _setup_train</span></span>
<span class="line"><span>    self.train_loader = self.get_dataloader(self.trainset, batch_size=batch_size, rank=RANK, mode=&#39;train&#39;)</span></span>
<span class="line"><span>                        ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^</span></span>
<span class="line"><span>  File &quot;D:\\anaconda3\\envs\\yolov8\\Lib\\site-packages\\ultralytics\\models\\yolo\\detect\\train.py&quot;, line 40, in get_dataloader</span></span>
<span class="line"><span>    return build_dataloader(dataset, batch_size, workers, shuffle, rank)  # return dataloader</span></span>
<span class="line"><span>           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^</span></span>
<span class="line"><span>  File &quot;D:\\anaconda3\\envs\\yolov8\\Lib\\site-packages\\ultralytics\\data\\build.py&quot;, line 101, in build_dataloader</span></span>
<span class="line"><span>    return InfiniteDataLoader(dataset=dataset,</span></span>
<span class="line"><span>           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^</span></span>
<span class="line"><span>  File &quot;D:\\anaconda3\\envs\\yolov8\\Lib\\site-packages\\ultralytics\\data\\build.py&quot;, line 29, in __init__</span></span>
<span class="line"><span>    self.iterator = super().__iter__()</span></span>
<span class="line"><span>                    ^^^^^^^^^^^^^^^^^^</span></span>
<span class="line"><span>  File &quot;D:\\anaconda3\\envs\\yolov8\\Lib\\site-packages\\torch\\utils\\data\\dataloader.py&quot;, line 441, in __iter__</span></span>
<span class="line"><span>    return self._get_iterator()</span></span>
<span class="line"><span>           ^^^^^^^^^^^^^^^^^^^^</span></span>
<span class="line"><span>  File &quot;D:\\anaconda3\\envs\\yolov8\\Lib\\site-packages\\torch\\utils\\data\\dataloader.py&quot;, line 388, in _get_iterator</span></span>
<span class="line"><span>    return _MultiProcessingDataLoaderIter(self)</span></span>
<span class="line"><span>           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^</span></span>
<span class="line"><span>  File &quot;D:\\anaconda3\\envs\\yolov8\\Lib\\site-packages\\torch\\utils\\data\\dataloader.py&quot;, line 1042, in __init__</span></span>
<span class="line"><span>    w.start()</span></span>
<span class="line"><span>  File &quot;D:\\anaconda3\\envs\\yolov8\\Lib\\multiprocessing\\process.py&quot;, line 121, in start</span></span>
<span class="line"><span>    self._popen = self._Popen(self)</span></span>
<span class="line"><span>                  ^^^^^^^^^^^^^^^^^</span></span>
<span class="line"><span>  File &quot;D:\\anaconda3\\envs\\yolov8\\Lib\\multiprocessing\\context.py&quot;, line 224, in _Popen</span></span>
<span class="line"><span>    return _default_context.get_context().Process._Popen(process_obj)</span></span>
<span class="line"><span>           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^</span></span>
<span class="line"><span>  File &quot;D:\\anaconda3\\envs\\yolov8\\Lib\\multiprocessing\\context.py&quot;, line 336, in _Popen</span></span>
<span class="line"><span>    return Popen(process_obj)</span></span>
<span class="line"><span>           ^^^^^^^^^^^^^^^^^^</span></span>
<span class="line"><span>  File &quot;D:\\anaconda3\\envs\\yolov8\\Lib\\multiprocessing\\popen_spawn_win32.py&quot;, line 45, in __init__</span></span>
<span class="line"><span>    prep_data = spawn.get_preparation_data(process_obj._name)</span></span>
<span class="line"><span>                ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^</span></span>
<span class="line"><span>  File &quot;D:\\anaconda3\\envs\\yolov8\\Lib\\multiprocessing\\spawn.py&quot;, line 160, in get_preparation_data</span></span>
<span class="line"><span>    _check_not_importing_main()</span></span>
<span class="line"><span>  File &quot;D:\\anaconda3\\envs\\yolov8\\Lib\\multiprocessing\\spawn.py&quot;, line 140, in _check_not_importing_main</span></span>
<span class="line"><span>    raise RuntimeError(&#39;&#39;&#39;</span></span>
<span class="line"><span>RuntimeError:</span></span>
<span class="line"><span>        An attempt has been made to start a new process before the</span></span>
<span class="line"><span>        current process has finished its bootstrapping phase.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        This probably means that you are not using fork to start your</span></span>
<span class="line"><span>        child processes and you have forgotten to use the proper idiom</span></span>
<span class="line"><span>        in the main module:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            if __name__ == &#39;__main__&#39;:</span></span>
<span class="line"><span>                freeze_support()</span></span>
<span class="line"><span>                ...</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        The &quot;freeze_support()&quot; line can be omitted if the program</span></span>
<span class="line"><span>        is not going to be frozen to produce an executable.</span></span></code></pre></div><p>修改<br><code>D:\\anaconda3\\envs\\yolov8\\Lib\\site-packages\\ultralytics\\data</code> 路径下的 <code>build.py</code> 文件里的函数 <code>build_dataloader</code>，将：</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">nw </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> min</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">([os.cpu_count() </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">//</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> max</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(nd, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">), batch </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> batch </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> else</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, workers])  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># number of workers</span></span></code></pre></div><p>直接修改为：</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">nw </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # update by jw 20230815</span></span></code></pre></div><p>完整函数示例如下：</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">def</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> build_dataloader</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(dataset, batch, workers, shuffle</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">True</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, rank</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">):</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;&quot;&quot;Return an InfiniteDataLoader or DataLoader for training or validation set.&quot;&quot;&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    batch </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> min</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(batch, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">len</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(dataset))</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    nd </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> torch.cuda.device_count()  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># number of CUDA devices</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # nw = min([os.cpu_count()</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // max(nd, 1), batch if batch &gt; 1 else 0, workers])  # number of workers</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    nw </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # update by jw 20230815</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # ... 后续代码保持不变</span></span></code></pre></div><p><img src="`+e+'" alt="错误示意图"></p><h2 id="【参考】" tabindex="-1">【参考】 <a class="header-anchor" href="#【参考】" aria-label="Permalink to &quot;【参考】&quot;">​</a></h2><ul><li><a href="https://zhuanlan.zhihu.com/p/553407062#:~:text=RuntimeError%3A%20An%20attempt%20has%20been%20made%20to%20start,main%20module%3A%20if%20__name__%20%3D%3D%20%27__main__%27%3A%20freeze_support%20%28%29" target="_blank" rel="noreferrer">解决 RuntimeError: An attempt has been made to start a new process before... 办法</a></li><li><a href="https://www.cnblogs.com/carmen-019/p/15077749.html" target="_blank" rel="noreferrer">Python 进程 - 调试报错 you are not using fork to start your child processes</a></li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span></code></pre></div>',13)])])}const _=a(t,[["render",l]]);export{u as __pageData,_ as default};
