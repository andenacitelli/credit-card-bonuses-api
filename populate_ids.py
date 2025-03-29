# /// script
# requires-python = ">=3.11"
# dependencies = []
# ///

from pathlib import Path
import secrets

def _generate_hex_id() -> str:
    return secrets.token_hex(16)

def main() -> None:
    for file in Path("src/data/cards").glob("*.ts"):
        contents = file.read_text()
        contents = contents.replace(
            '"id": ""',
            f'"id": "{_generate_hex_id()}"',
        )
        file.write_text(contents)

if __name__ == "__main__":
    main()
