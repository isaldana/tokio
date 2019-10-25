(function() {var implementors = {};
implementors["tokio"] = [{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/std/fs/struct.File.html\" title=\"struct std::fs::File\">File</a>&gt; for <a class=\"struct\" href=\"tokio/fs/struct.File.html\" title=\"struct tokio::fs::File\">File</a>",synthetic:false,types:["tokio::fs::file::File"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/std/fs/struct.OpenOptions.html\" title=\"struct std::fs::OpenOptions\">OpenOptions</a>&gt; for <a class=\"struct\" href=\"tokio/fs/struct.OpenOptions.html\" title=\"struct tokio::fs::OpenOptions\">OpenOptions</a>",synthetic:false,types:["tokio::fs::open_options::OpenOptions"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/std/process/struct.Command.html\" title=\"struct std::process::Command\">Command</a>&gt; for <a class=\"struct\" href=\"tokio/process/struct.Command.html\" title=\"struct tokio::process::Command\">Command</a>",synthetic:false,types:["tokio::process::Command"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"tokio/timer/timeout/struct.Elapsed.html\" title=\"struct tokio::timer::timeout::Elapsed\">Elapsed</a>&gt; for <a class=\"struct\" href=\"tokio/io/struct.Error.html\" title=\"struct tokio::io::Error\">Error</a>",synthetic:false,types:["std::io::error::Error"]},];
implementors["tokio_executor"] = [{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"tokio_executor/struct.EnterError.html\" title=\"struct tokio_executor::EnterError\">EnterError</a>&gt; for <a class=\"struct\" href=\"tokio_executor/current_thread/struct.RunTimeoutError.html\" title=\"struct tokio_executor::current_thread::RunTimeoutError\">RunTimeoutError</a>",synthetic:false,types:["tokio_executor::current_thread::RunTimeoutError"]},{text:"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"tokio_executor/struct.EnterError.html\" title=\"struct tokio_executor::EnterError\">EnterError</a>&gt; for <a class=\"struct\" href=\"tokio_executor/current_thread/struct.BlockError.html\" title=\"struct tokio_executor::current_thread::BlockError\">BlockError</a>&lt;T&gt;",synthetic:false,types:["tokio_executor::current_thread::BlockError"]},];
implementors["tokio_io"] = [{text:"impl&lt;RW&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"tokio_io/struct.BufReader.html\" title=\"struct tokio_io::BufReader\">BufReader</a>&lt;<a class=\"struct\" href=\"tokio_io/struct.BufWriter.html\" title=\"struct tokio_io::BufWriter\">BufWriter</a>&lt;RW&gt;&gt;&gt; for <a class=\"struct\" href=\"tokio_io/struct.BufStream.html\" title=\"struct tokio_io::BufStream\">BufStream</a>&lt;RW&gt;",synthetic:false,types:["tokio_io::io::buf_stream::BufStream"]},{text:"impl&lt;RW&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"tokio_io/struct.BufWriter.html\" title=\"struct tokio_io::BufWriter\">BufWriter</a>&lt;<a class=\"struct\" href=\"tokio_io/struct.BufReader.html\" title=\"struct tokio_io::BufReader\">BufReader</a>&lt;RW&gt;&gt;&gt; for <a class=\"struct\" href=\"tokio_io/struct.BufStream.html\" title=\"struct tokio_io::BufStream\">BufStream</a>&lt;RW&gt;",synthetic:false,types:["tokio_io::io::buf_stream::BufStream"]},];
implementors["tokio_sync"] = [{text:"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">(</a>T, TrySendError<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">)</a>&gt; for <a class=\"struct\" href=\"tokio_sync/mpsc/error/struct.TrySendError.html\" title=\"struct tokio_sync::mpsc::error::TrySendError\">TrySendError</a>&lt;T&gt;",synthetic:false,types:["tokio_sync::mpsc::bounded::TrySendError"]},{text:"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">(</a>T, TrySendError<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">)</a>&gt; for <a class=\"struct\" href=\"tokio_sync/mpsc/error/struct.UnboundedTrySendError.html\" title=\"struct tokio_sync::mpsc::error::UnboundedTrySendError\">UnboundedTrySendError</a>&lt;T&gt;",synthetic:false,types:["tokio_sync::mpsc::unbounded::UnboundedTrySendError"]},{text:"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;T&gt; for <a class=\"struct\" href=\"tokio_sync/struct.Mutex.html\" title=\"struct tokio_sync::Mutex\">Mutex</a>&lt;T&gt;",synthetic:false,types:["tokio_sync::mutex::Mutex"]},];
implementors["tokio_tls"] = [{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://docs.rs/native-tls/0.2/native_tls/struct.TlsConnector.html\" title=\"struct native_tls::TlsConnector\">TlsConnector</a>&gt; for <a class=\"struct\" href=\"tokio_tls/struct.TlsConnector.html\" title=\"struct tokio_tls::TlsConnector\">TlsConnector</a>",synthetic:false,types:["tokio_tls::TlsConnector"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://docs.rs/native-tls/0.2/native_tls/struct.TlsAcceptor.html\" title=\"struct native_tls::TlsAcceptor\">TlsAcceptor</a>&gt; for <a class=\"struct\" href=\"tokio_tls/struct.TlsAcceptor.html\" title=\"struct tokio_tls::TlsAcceptor\">TlsAcceptor</a>",synthetic:false,types:["tokio_tls::TlsAcceptor"]},];
implementors["tokio_util"] = [{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/std/io/error/struct.Error.html\" title=\"struct std::io::error::Error\">Error</a>&gt; for <a class=\"enum\" href=\"tokio_util/codec/enum.LinesCodecError.html\" title=\"enum tokio_util::codec::LinesCodecError\">LinesCodecError</a>",synthetic:false,types:["tokio_util::codec::lines_codec::LinesCodecError"]},];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        })()