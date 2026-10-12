const snippets = {
  swiftui: { file: 'AboutMe.swift', code: `import SwiftUI

struct Shailendra: View {
  var body: some View {
    VStack(alignment: .leading) {
      Text("iOS engineer. Backend curious.")
      Text("I make complex things feel simple.")
      Text("Also available for code reviews.")
    }
    .padding(.care)
    // Illustrative code. Care has no fixed size.
  }
}` },
  uikit: { file: 'AboutMeViewController.swift', code: `import UIKit

final class Shailendra: UIViewController {
  override func viewDidLoad() {
    super.viewDidLoad()
    // First: understand the problem.
    // Then: build something worth tapping.
  }

  func collaborate(idea: String?) {
    guard let idea else { return }
    print("Let's build: \\(idea)")
  }
}` },
  node: { file: 'about-me.js', code: `const developer = {
  name: "Shailendra Kushwaha",
  home: "iOS",
  alsoSpeaks: ["Node.js", "JavaScript", "PHP"],
  approach: "Understand. Build. Refine."
};

if (yourIdea && developer) {
  console.log("Sounds like a good collaboration.");
}

// Fewer callbacks. More call-me-backs.` },
  php: { file: 'about-me.php', code: `<?php
$developer = [
  'name' => 'Shailendra Kushwaha',
  'craft' => 'iOS + backend',
  'approach' => 'Build with care'
];

if (isset($yourIdea)) {
  echo "Let's turn that into something useful.";
}

// Yes, the dollar signs are part of the syntax.
// No, this is not an invoice.` },
  sql: { file: 'about-me.sql', code: `-- A little personality, in query form.
-- Illustrative schema; no database needed.

SELECT name, craft, curiosity
FROM developers
WHERE name = 'Shailendra Kushwaha'
  AND cares_about_details = TRUE;

-- Expected result: one human who likes building.
-- Please don't DROP the conversation.` },
  shell: { file: 'hello.sh', code: `#!/bin/sh

name="Shailendra Kushwaha"
printf 'Hello, I am %s.\\n' "$name"

# My usual workflow:
# understand the problem
# build the solution
# test the assumptions
# ship with care

printf '%s\\n' "Works on my machine is step one."
# Production is the destination.` }
};
const code = document.getElementById('code-content');
const tabs = [...document.querySelectorAll('[role="tab"]')];
function showSnippet(tab) {
  tabs.forEach(item => { item.setAttribute('aria-selected', String(item === tab)); item.tabIndex = item === tab ? 0 : -1; });
  const snippet = snippets[tab.dataset.lang];
  document.getElementById('filename').textContent = snippet.file;
  document.getElementById('code-panel').setAttribute('aria-labelledby', tab.id);
  // Escape first: all snippets remain inert text, including PHP markup.
  const escaped = snippet.code.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  code.innerHTML = escaped.replace(/(\/\/[^\n]*|--[^\n]*|#[^\n]*|"(?:[^"\\]|\\.)*"|'[^']*'|\b(?:import|struct|var|some|func|override|final|class|guard|let|else|return|const|if|SELECT|FROM|WHERE|AND|TRUE)\b)/g, token => {
    const kind = /^(\/\/|--|#)/.test(token) ? 'code-comment' : /^["']/.test(token) ? 'code-string' : 'code-purple';
    return `<span class="${kind}">${token}</span>`;
  });
}
tabs.forEach((tab, index) => {
  tab.addEventListener('click', () => showSnippet(tab));
  tab.addEventListener('keydown', event => {
    let next;
    if (event.key === 'ArrowRight') next = (index + 1) % tabs.length;
    if (event.key === 'ArrowLeft') next = (index - 1 + tabs.length) % tabs.length;
    if (event.key === 'Home') next = 0;
    if (event.key === 'End') next = tabs.length - 1;
    if (next !== undefined) { event.preventDefault(); showSnippet(tabs[next]); tabs[next].focus(); }
  });
});
showSnippet(tabs[0]);
document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('copy-email').addEventListener('click', async () => {
  const status = document.getElementById('copy-status');
  try {
    await navigator.clipboard.writeText('shailkushwaha86@gmail.com');
    status.textContent = 'Email copied. Your move!';
  } catch {
    status.textContent = 'Email: shailkushwaha86@gmail.com';
  }
});
