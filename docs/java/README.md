# Java

# 多线程并发同步场景及解决方案

## Semaphore （信号量，控制并发线程数，限流）

> 模拟买票，只有2个售票窗口，排队买票
```
    private static void semaphoreTest() {
        final Semaphore semaphore = new Semaphore(2);

        ExecutorService executorService = Executors.newCachedThreadPool();

        for (int i = 0; i < 10; i++) {
            executorService.execute(new Runnable() {
                @Override
                public void run() {
                    try {
                        //获取信号量
                        semaphore.acquire();
                    } catch (InterruptedException ex) {
                        ex.printStackTrace();
                    }
                    System.out.println(Thread.currentThread().getName() + "开始买票----");
                    try {
                        Thread.sleep((long) (Math.random() * 10000));
                    } catch (InterruptedException ex) {
                        ex.printStackTrace();
                    }

                    System.out.println(Thread.currentThread().getName() + "买票结束，离开");

                    //释放信号量
                    semaphore.release();
                }
            });
        }

        executorService.shutdown();
    }
```

> 执行效果

```
pool-1-thread-1开始买票----
pool-1-thread-2开始买票----
pool-1-thread-1买票结束，离开
pool-1-thread-3开始买票----
pool-1-thread-2买票结束，离开
pool-1-thread-4开始买票----
pool-1-thread-3买票结束，离开
pool-1-thread-5开始买票----
pool-1-thread-5买票结束，离开
pool-1-thread-6开始买票----
pool-1-thread-6买票结束，离开
pool-1-thread-7开始买票----
pool-1-thread-4买票结束，离开
pool-1-thread-8开始买票----
pool-1-thread-7买票结束，离开
pool-1-thread-9开始买票----
pool-1-thread-8买票结束，离开
pool-1-thread-10开始买票----
pool-1-thread-10买票结束，离开
pool-1-thread-9买票结束，离开

Process finished with exit code 0
```

## CyclicBarrier 可循环的障碍物，等待其它设定的所有线程共同到达某个阻塞点再共同执行某一任务（再往下执行），

> 模拟聚餐，需要等人齐了再一起吃饭

```
    private static void cyclicBarrierTest() {
        final CyclicBarrier cyclicBarrier = new CyclicBarrier(3, new Runnable() {
            @Override
            public void run() {
                System.out.println("人都到齐了，拍照合影...");
            }
        });

        ExecutorService executorService = Executors.newCachedThreadPool();

        for (int i = 0; i < 3; i++) {
            executorService.execute(new Runnable() {
                @Override
                public void run() {
                    try {
                        Thread.sleep((long) (Math.random() * 10000));
                        System.out.println(Thread.currentThread().getName() + "已经到达，当前已有" + cyclicBarrier.getNumberWaiting() + "到达");
                        cyclicBarrier.await();
                        System.out.println("人都到齐了，开始干饭");
                        Thread.sleep((long) (Math.random() * 10000));
                        System.out.println(Thread.currentThread().getName()+"吃完了，准备离开...");
                    } catch (BrokenBarrierException | InterruptedException ex) {
                        ex.printStackTrace();
                    }
                }
            });
        }
        executorService.shutdown();
    }
```

> 执行效果

```
pool-1-thread-2已经到达，当前已有0到达
pool-1-thread-3已经到达，当前已有1到达
pool-1-thread-1已经到达，当前已有2到达
人都到齐了，拍照合影...
人都到齐了，开始干饭
人都到齐了，开始干饭
人都到齐了，开始干饭
pool-1-thread-2吃完了，准备离开...
pool-1-thread-1吃完了，准备离开...
pool-1-thread-3吃完了，准备离开...

Process finished with exit code 0
```


## CountDownLatch 线程计数器，控制某一个任务需要等待几个线程执行后再执行

> 模拟主线程等待设定的线程执行完毕再执行

```
    private static void countDownLatchTest() {

        final CountDownLatch countDownLatch = new CountDownLatch(3);

        System.out.println("执行主线程");

        for (int i = 0; i < 3; i++) {
            new Thread(new Runnable() {
                @Override
                public void run() {
                    System.out.println("开始执行线程" + Thread.currentThread().getName());
                    try {
                        Thread.sleep((long) (Math.random() * 10000));
                    } catch (InterruptedException ex) {
                        ex.printStackTrace();
                    }
                    System.out.println(Thread.currentThread().getName() + "执行结束");
                    countDownLatch.countDown();
                }
            }).start();
        }

        try {
            countDownLatch.await();
        } catch (InterruptedException ex) {
            ex.printStackTrace();
        }
        System.out.println("继续执行主线程");
        try {
            Thread.sleep((long) (Math.random() * 10000));
        } catch (InterruptedException ex) {
            ex.printStackTrace();
        }
        System.out.println("主线程执行结束");
    }
```

> 执行效果

```
执行主线程
开始执行线程Thread-0
开始执行线程Thread-1
开始执行线程Thread-2
Thread-1执行结束
Thread-2执行结束
Thread-0执行结束
继续执行主线程
主线程执行结束

Process finished with exit code 0
```