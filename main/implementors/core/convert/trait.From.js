(function() {var implementors = {};
implementors["nebari"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.55.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.55.0/std/io/error/struct.Error.html\" title=\"struct std::io::error::Error\">Error</a>&gt; for <a class=\"enum\" href=\"nebari/enum.Error.html\" title=\"enum nebari::Error\">Error</a>","synthetic":false,"types":["nebari::error::Error"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.55.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;&amp;'static <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.55.0/std/primitive.str.html\">str</a>&gt; for <a class=\"enum\" href=\"nebari/enum.Error.html\" title=\"enum nebari::Error\">Error</a>","synthetic":false,"types":["nebari::error::Error"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.55.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.55.0/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>&gt; for <a class=\"enum\" href=\"nebari/enum.Error.html\" title=\"enum nebari::Error\">Error</a>","synthetic":false,"types":["nebari::error::Error"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.55.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"nebari/enum.Error.html\" title=\"enum nebari::Error\">Error</a>&gt; for <a class=\"enum\" href=\"nebari/enum.CompareAndSwapError.html\" title=\"enum nebari::CompareAndSwapError\">CompareAndSwapError</a>","synthetic":false,"types":["nebari::roots::CompareAndSwapError"]},{"text":"impl&lt;U:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.55.0/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.55.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.55.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"nebari/enum.Error.html\" title=\"enum nebari::Error\">Error</a>&gt; for <a class=\"enum\" href=\"nebari/enum.AbortError.html\" title=\"enum nebari::AbortError\">AbortError</a>&lt;U&gt;","synthetic":false,"types":["nebari::roots::AbortError"]},{"text":"impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.55.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.55.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.55.0/std/primitive.u8.html\">u8</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/1.55.0/alloc/alloc/struct.Global.html\" title=\"struct alloc::alloc::Global\">Global</a>&gt;&gt; for <a class=\"struct\" href=\"nebari/struct.Buffer.html\" title=\"struct nebari::Buffer\">Buffer</a>&lt;'a&gt;","synthetic":false,"types":["nebari::buffer::Buffer"]},{"text":"impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.55.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.55.0/std/primitive.slice.html\">&amp;'a [</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/1.55.0/std/primitive.u8.html\">u8</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/1.55.0/std/primitive.slice.html\">]</a>&gt; for <a class=\"struct\" href=\"nebari/struct.Buffer.html\" title=\"struct nebari::Buffer\">Buffer</a>&lt;'a&gt;","synthetic":false,"types":["nebari::buffer::Buffer"]},{"text":"impl&lt;'a, const N:&nbsp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.55.0/std/primitive.usize.html\">usize</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.55.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;&amp;'a <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.55.0/std/primitive.array.html\">[</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/1.55.0/std/primitive.u8.html\">u8</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/1.55.0/std/primitive.array.html\">; N]</a>&gt; for <a class=\"struct\" href=\"nebari/struct.Buffer.html\" title=\"struct nebari::Buffer\">Buffer</a>&lt;'a&gt;","synthetic":false,"types":["nebari::buffer::Buffer"]},{"text":"impl&lt;'a, const N:&nbsp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.55.0/std/primitive.usize.html\">usize</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.55.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.55.0/std/primitive.array.html\">[</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/1.55.0/std/primitive.u8.html\">u8</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/1.55.0/std/primitive.array.html\">; N]</a>&gt; for <a class=\"struct\" href=\"nebari/struct.Buffer.html\" title=\"struct nebari::Buffer\">Buffer</a>&lt;'a&gt;","synthetic":false,"types":["nebari::buffer::Buffer"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()