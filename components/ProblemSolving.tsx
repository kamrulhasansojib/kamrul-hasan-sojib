import React from "react";
import { Cpu, BrainCircuit, ExternalLink } from "lucide-react";

const ProblemSolving: React.FC = () => {
  return (
    <section
      id="problem-solving"
      className="py-24 px-6 relative overflow-hidden"
    >
      {/* Decorative Blur */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-64 h-64 bg-blue-500/10 blur-[100px] rounded-full"></div>

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center text-blue-400 mb-8">
              <BrainCircuit className="w-8 h-8" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Mastering{" "}
              <span className="text-blue-400">Algorithms with C/C++</span>
            </h2>
            <div className="text-gray-400 text-lg leading-relaxed mb-8 space-y-4">
              <p>
                Competitive programming and deep algorithmic thinking are at the
                heart of my development philosophy. I specialize in C/C++,
                leveraging their efficiency to solve complex computational
                problems.
              </p>
              <p>
                I am actively sharpening my logical skills on platforms like
                <a
                  href="https://leetcode.com/u/kamrul_hasan_sojib/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 font-semibold mx-1 inline-flex items-center gap-1 transition-colors"
                >
                  LeetCode <ExternalLink className="w-3 h-3" />
                </a>
                and
                <a
                  href="https://www.codechef.com/users/sojib19"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 font-semibold mx-1 inline-flex items-center gap-1 transition-colors"
                >
                  CodeChef <ExternalLink className="w-3 h-3" />
                </a>
                , where I tackle challenges in dynamic programming, graph
                theory, and data structure optimization.
              </p>
            </div>

            <ul className="space-y-4 mb-8">
              {[
                "Advanced Data Structures (Segment Trees, Graphs, Heaps)",
                "Dynamic Programming and Greedy Algorithms",
                "Optimizing Space and Time Complexity",
                "Regular Participation in Online Contests",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-gray-300"
                >
                  <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 font-mono text-sm relative">
            <div className="flex gap-2 mb-6">
              <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
            </div>
            <div className="space-y-1 text-gray-400">
              <p className="text-blue-400">#include &lt;iostream&gt;</p>
              <p className="text-blue-400">#include &lt;vector&gt;</p>
              <p className="text-blue-400">#include &lt;algorithm&gt;</p>
              <p className="text-gray-500">// Problem Solver Class</p>
              <p className="text-pink-400">
                class <span className="text-yellow-400">Algorithmist</span>{" "}
                {"{"}
              </p>
              <p className="pl-4 text-pink-400">public:</p>
              <p className="pl-8 text-white">
                <span className="text-pink-400">void</span>{" "}
                optimizePerformance() {"{"}
              </p>
              <p className="pl-12 text-gray-500">
                /* Logical thinking in progress... */
              </p>
              <p className="pl-12">std::sort(data.begin(), data.end());</p>
              <p className="pl-12">std::vector&lt;int&gt; dp(n, 0);</p>
              <p className="pl-12 text-blue-400">
                auto{" "}
                <span className="text-white">
                  it = std::unique(data.begin(), data.end());
                </span>
              </p>
              <p className="pl-12">data.erase(it, data.end());</p>
              <p className="pl-12">
                std::cout &lt;&lt;{" "}
                <span className="text-green-400">"Complexity O(N log N)"</span>{" "}
                &lt;&lt; std::endl;
              </p>
              <p className="pl-8 text-white">{"}"}</p>
              <p className="text-pink-400">{"}"};</p>
            </div>

            <div className="absolute -bottom-6 -right-6 p-6 bg-[#0a0a0a] border border-blue-500/30 rounded-2xl shadow-2xl">
              <div className="flex items-center gap-4">
                <div className="text-blue-400 bg-blue-500/10 p-2 rounded-lg">
                  <Cpu className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-white font-bold">C++ Ninja</div>
                  <div className="text-xs text-gray-500">Low-level Mastery</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolving;
