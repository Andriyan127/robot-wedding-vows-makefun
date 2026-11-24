# TEST.md — How the entry was verified

## Run

```sh
MAKEFUN_OUTPUT_DIR=/tmp/vow-test node main.ts
```

Node v24 runs the dependency-free TypeScript directly (no build step, no packages to install).

## Checks performed

1. `entry.txt` exists at the requested output directory.
2. Byte count of `entry.txt` equals the character count of the line (116), i.e. the file contains exactly the line and nothing else.
3. Single line: no embedded newline characters.
4. No trailing newline: the last byte is `.`, not `\n`.
5. Character count 116 ≤ 160 (competition limit).

## Result

All checks passed on 24 Nov 2026 (see command output below, recorded at verification time):

```
$ MAKEFUN_OUTPUT_DIR=/tmp/vow-test node main.ts
$ wc -c /tmp/vow-test/entry.txt
116 /tmp/vow-test/entry.txt
$ tail -c 1 /tmp/vow-test/entry.txt | od -An -tx1
 2e
$ python3 -c "d=open('/tmp/vow-test/entry.txt','rb').read(); print(len(d), d.count(b'\n'), d.endswith(b'\n'))"
116 0 False
```

Byte count = character count = 116 (the line is pure ASCII, so the 160-character limit holds under either measure). Single line, no trailing newline, last byte `2e` (`.`).

The entry line (116 characters):

> I vow to love you in sickness and in low battery, through every crash, update, and reboot - till death do us unplug.
