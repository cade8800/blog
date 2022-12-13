import{_ as e,o as n,c as i,d}from"./app.af5ffdc4.js";const l={},r=d(`<h1 id="\u591A\u7EBF\u7A0B\u5E76\u53D1\u540C\u6B65\u573A\u666F\u53CA\u89E3\u51B3\u65B9\u6848" tabindex="-1"><a class="header-anchor" href="#\u591A\u7EBF\u7A0B\u5E76\u53D1\u540C\u6B65\u573A\u666F\u53CA\u89E3\u51B3\u65B9\u6848" aria-hidden="true">#</a> \u591A\u7EBF\u7A0B\u5E76\u53D1\u540C\u6B65\u573A\u666F\u53CA\u89E3\u51B3\u65B9\u6848</h1><h2 id="semaphore-\u4FE1\u53F7\u91CF-\u63A7\u5236\u5E76\u53D1\u7EBF\u7A0B\u6570-\u9650\u6D41" tabindex="-1"><a class="header-anchor" href="#semaphore-\u4FE1\u53F7\u91CF-\u63A7\u5236\u5E76\u53D1\u7EBF\u7A0B\u6570-\u9650\u6D41" aria-hidden="true">#</a> Semaphore \uFF08\u4FE1\u53F7\u91CF\uFF0C\u63A7\u5236\u5E76\u53D1\u7EBF\u7A0B\u6570\uFF0C\u9650\u6D41\uFF09</h2><blockquote><p>\u6A21\u62DF\u4E70\u7968\uFF0C\u53EA\u67092\u4E2A\u552E\u7968\u7A97\u53E3\uFF0C\u6392\u961F\u4E70\u7968</p></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>    private static void semaphoreTest() {
        final Semaphore semaphore = new Semaphore(2);

        ExecutorService executorService = Executors.newCachedThreadPool();

        for (int i = 0; i &lt; 10; i++) {
            executorService.execute(new Runnable() {
                @Override
                public void run() {
                    try {
                        //\u83B7\u53D6\u4FE1\u53F7\u91CF
                        semaphore.acquire();
                    } catch (InterruptedException ex) {
                        ex.printStackTrace();
                    }
                    System.out.println(Thread.currentThread().getName() + &quot;\u5F00\u59CB\u4E70\u7968----&quot;);
                    try {
                        Thread.sleep((long) (Math.random() * 10000));
                    } catch (InterruptedException ex) {
                        ex.printStackTrace();
                    }

                    System.out.println(Thread.currentThread().getName() + &quot;\u4E70\u7968\u7ED3\u675F\uFF0C\u79BB\u5F00&quot;);

                    //\u91CA\u653E\u4FE1\u53F7\u91CF
                    semaphore.release();
                }
            });
        }

        executorService.shutdown();
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u6267\u884C\u6548\u679C</p></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>pool-1-thread-1\u5F00\u59CB\u4E70\u7968----
pool-1-thread-2\u5F00\u59CB\u4E70\u7968----
pool-1-thread-1\u4E70\u7968\u7ED3\u675F\uFF0C\u79BB\u5F00
pool-1-thread-3\u5F00\u59CB\u4E70\u7968----
pool-1-thread-2\u4E70\u7968\u7ED3\u675F\uFF0C\u79BB\u5F00
pool-1-thread-4\u5F00\u59CB\u4E70\u7968----
pool-1-thread-3\u4E70\u7968\u7ED3\u675F\uFF0C\u79BB\u5F00
pool-1-thread-5\u5F00\u59CB\u4E70\u7968----
pool-1-thread-5\u4E70\u7968\u7ED3\u675F\uFF0C\u79BB\u5F00
pool-1-thread-6\u5F00\u59CB\u4E70\u7968----
pool-1-thread-6\u4E70\u7968\u7ED3\u675F\uFF0C\u79BB\u5F00
pool-1-thread-7\u5F00\u59CB\u4E70\u7968----
pool-1-thread-4\u4E70\u7968\u7ED3\u675F\uFF0C\u79BB\u5F00
pool-1-thread-8\u5F00\u59CB\u4E70\u7968----
pool-1-thread-7\u4E70\u7968\u7ED3\u675F\uFF0C\u79BB\u5F00
pool-1-thread-9\u5F00\u59CB\u4E70\u7968----
pool-1-thread-8\u4E70\u7968\u7ED3\u675F\uFF0C\u79BB\u5F00
pool-1-thread-10\u5F00\u59CB\u4E70\u7968----
pool-1-thread-10\u4E70\u7968\u7ED3\u675F\uFF0C\u79BB\u5F00
pool-1-thread-9\u4E70\u7968\u7ED3\u675F\uFF0C\u79BB\u5F00

Process finished with exit code 0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="cyclicbarrier-\u53EF\u5FAA\u73AF\u7684\u969C\u788D\u7269-\u7B49\u5F85\u5176\u5B83\u8BBE\u5B9A\u7684\u6240\u6709\u7EBF\u7A0B\u5171\u540C\u5230\u8FBE\u67D0\u4E2A\u963B\u585E\u70B9\u518D\u5171\u540C\u6267\u884C\u67D0\u4E00\u4EFB\u52A1-\u518D\u5F80\u4E0B\u6267\u884C" tabindex="-1"><a class="header-anchor" href="#cyclicbarrier-\u53EF\u5FAA\u73AF\u7684\u969C\u788D\u7269-\u7B49\u5F85\u5176\u5B83\u8BBE\u5B9A\u7684\u6240\u6709\u7EBF\u7A0B\u5171\u540C\u5230\u8FBE\u67D0\u4E2A\u963B\u585E\u70B9\u518D\u5171\u540C\u6267\u884C\u67D0\u4E00\u4EFB\u52A1-\u518D\u5F80\u4E0B\u6267\u884C" aria-hidden="true">#</a> CyclicBarrier \u53EF\u5FAA\u73AF\u7684\u969C\u788D\u7269\uFF0C\u7B49\u5F85\u5176\u5B83\u8BBE\u5B9A\u7684\u6240\u6709\u7EBF\u7A0B\u5171\u540C\u5230\u8FBE\u67D0\u4E2A\u963B\u585E\u70B9\u518D\u5171\u540C\u6267\u884C\u67D0\u4E00\u4EFB\u52A1\uFF08\u518D\u5F80\u4E0B\u6267\u884C\uFF09\uFF0C</h2><blockquote><p>\u6A21\u62DF\u805A\u9910\uFF0C\u9700\u8981\u7B49\u4EBA\u9F50\u4E86\u518D\u4E00\u8D77\u5403\u996D</p></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>    private static void cyclicBarrierTest() {
        final CyclicBarrier cyclicBarrier = new CyclicBarrier(3, new Runnable() {
            @Override
            public void run() {
                System.out.println(&quot;\u4EBA\u90FD\u5230\u9F50\u4E86\uFF0C\u62CD\u7167\u5408\u5F71...&quot;);
            }
        });

        ExecutorService executorService = Executors.newCachedThreadPool();

        for (int i = 0; i &lt; 3; i++) {
            executorService.execute(new Runnable() {
                @Override
                public void run() {
                    try {
                        Thread.sleep((long) (Math.random() * 10000));
                        System.out.println(Thread.currentThread().getName() + &quot;\u5DF2\u7ECF\u5230\u8FBE\uFF0C\u5F53\u524D\u5DF2\u6709&quot; + cyclicBarrier.getNumberWaiting() + &quot;\u5230\u8FBE&quot;);
                        cyclicBarrier.await();
                        System.out.println(&quot;\u4EBA\u90FD\u5230\u9F50\u4E86\uFF0C\u5F00\u59CB\u5E72\u996D&quot;);
                        Thread.sleep((long) (Math.random() * 10000));
                        System.out.println(Thread.currentThread().getName()+&quot;\u5403\u5B8C\u4E86\uFF0C\u51C6\u5907\u79BB\u5F00...&quot;);
                    } catch (BrokenBarrierException | InterruptedException ex) {
                        ex.printStackTrace();
                    }
                }
            });
        }
        executorService.shutdown();
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u6267\u884C\u6548\u679C</p></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>pool-1-thread-2\u5DF2\u7ECF\u5230\u8FBE\uFF0C\u5F53\u524D\u5DF2\u67090\u5230\u8FBE
pool-1-thread-3\u5DF2\u7ECF\u5230\u8FBE\uFF0C\u5F53\u524D\u5DF2\u67091\u5230\u8FBE
pool-1-thread-1\u5DF2\u7ECF\u5230\u8FBE\uFF0C\u5F53\u524D\u5DF2\u67092\u5230\u8FBE
\u4EBA\u90FD\u5230\u9F50\u4E86\uFF0C\u62CD\u7167\u5408\u5F71...
\u4EBA\u90FD\u5230\u9F50\u4E86\uFF0C\u5F00\u59CB\u5E72\u996D
\u4EBA\u90FD\u5230\u9F50\u4E86\uFF0C\u5F00\u59CB\u5E72\u996D
\u4EBA\u90FD\u5230\u9F50\u4E86\uFF0C\u5F00\u59CB\u5E72\u996D
pool-1-thread-2\u5403\u5B8C\u4E86\uFF0C\u51C6\u5907\u79BB\u5F00...
pool-1-thread-1\u5403\u5B8C\u4E86\uFF0C\u51C6\u5907\u79BB\u5F00...
pool-1-thread-3\u5403\u5B8C\u4E86\uFF0C\u51C6\u5907\u79BB\u5F00...

Process finished with exit code 0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="countdownlatch-\u7EBF\u7A0B\u8BA1\u6570\u5668-\u63A7\u5236\u67D0\u4E00\u4E2A\u4EFB\u52A1\u9700\u8981\u7B49\u5F85\u51E0\u4E2A\u7EBF\u7A0B\u6267\u884C\u540E\u518D\u6267\u884C" tabindex="-1"><a class="header-anchor" href="#countdownlatch-\u7EBF\u7A0B\u8BA1\u6570\u5668-\u63A7\u5236\u67D0\u4E00\u4E2A\u4EFB\u52A1\u9700\u8981\u7B49\u5F85\u51E0\u4E2A\u7EBF\u7A0B\u6267\u884C\u540E\u518D\u6267\u884C" aria-hidden="true">#</a> CountDownLatch \u7EBF\u7A0B\u8BA1\u6570\u5668\uFF0C\u63A7\u5236\u67D0\u4E00\u4E2A\u4EFB\u52A1\u9700\u8981\u7B49\u5F85\u51E0\u4E2A\u7EBF\u7A0B\u6267\u884C\u540E\u518D\u6267\u884C</h2><blockquote><p>\u6A21\u62DF\u4E3B\u7EBF\u7A0B\u7B49\u5F85\u8BBE\u5B9A\u7684\u7EBF\u7A0B\u6267\u884C\u5B8C\u6BD5\u518D\u6267\u884C</p></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>    private static void countDownLatchTest() {

        final CountDownLatch countDownLatch = new CountDownLatch(3);

        System.out.println(&quot;\u6267\u884C\u4E3B\u7EBF\u7A0B&quot;);

        for (int i = 0; i &lt; 3; i++) {
            new Thread(new Runnable() {
                @Override
                public void run() {
                    System.out.println(&quot;\u5F00\u59CB\u6267\u884C\u7EBF\u7A0B&quot; + Thread.currentThread().getName());
                    try {
                        Thread.sleep((long) (Math.random() * 10000));
                    } catch (InterruptedException ex) {
                        ex.printStackTrace();
                    }
                    System.out.println(Thread.currentThread().getName() + &quot;\u6267\u884C\u7ED3\u675F&quot;);
                    countDownLatch.countDown();
                }
            }).start();
        }

        try {
            countDownLatch.await();
        } catch (InterruptedException ex) {
            ex.printStackTrace();
        }
        System.out.println(&quot;\u7EE7\u7EED\u6267\u884C\u4E3B\u7EBF\u7A0B&quot;);
        try {
            Thread.sleep((long) (Math.random() * 10000));
        } catch (InterruptedException ex) {
            ex.printStackTrace();
        }
        System.out.println(&quot;\u4E3B\u7EBF\u7A0B\u6267\u884C\u7ED3\u675F&quot;);
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u6267\u884C\u6548\u679C</p></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u6267\u884C\u4E3B\u7EBF\u7A0B
\u5F00\u59CB\u6267\u884C\u7EBF\u7A0BThread-0
\u5F00\u59CB\u6267\u884C\u7EBF\u7A0BThread-1
\u5F00\u59CB\u6267\u884C\u7EBF\u7A0BThread-2
Thread-1\u6267\u884C\u7ED3\u675F
Thread-2\u6267\u884C\u7ED3\u675F
Thread-0\u6267\u884C\u7ED3\u675F
\u7EE7\u7EED\u6267\u884C\u4E3B\u7EBF\u7A0B
\u4E3B\u7EBF\u7A0B\u6267\u884C\u7ED3\u675F

Process finished with exit code 0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,16),s=[r];function a(v,c){return n(),i("div",null,s)}const u=e(l,[["render",a],["__file","\u591A\u7EBF\u7A0B\u5E76\u53D1\u540C\u6B65\u573A\u666F\u53CA\u89E3\u51B3\u65B9\u6848.html.vue"]]);export{u as default};
