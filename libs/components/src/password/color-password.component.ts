import { Component, HostBinding, Input } from "@angular/core";

import { Utils } from "@bitwarden/common/misc/utils";

type CharacterTypes = "letter" | "emoji" | "special" | "number";

@Component({
  selector: "color-password",
  template: `
    <span *ngFor="let character of passwordArray; index as i" [class]="getCharacterClass(character)">
      {{ character }}
      <span *ngIf="showCount" class="tw-whitespace-nowrap tw-text-xs tw-leading-5 tw-text-main">{{
        i + 1
      }}</span>
    </span>
  `,
})
export class ColorPasswordComponent {
  @Input() private password: string = null;
  @Input() showCount = false;

  characterStyles: Partial<Record<CharacterTypes, string[]>> = {
    letter: ["tw-text-main"],
    special: ["tw-text-danger"],
    number: ["tw-text-primary-500"],
  };

  @HostBinding("class")
  get classList() {
    return ["tw-min-w-0", "tw-whitespace-pre-wrap", "tw-break-all"];
  }

  get passwordArray() {
    // Convert to an array to handle cases that stings have special characters, ie: emoji.
    return Array.from(this.password);
  }

  sanitizeCharacter(character: string): string {
    switch (character) {
      case "&":
        character = "&amp;";
        break;
      case "<":
        character = "&lt;";
        break;
      case ">":
        character = "&gt;";
        break;
      case " ":
        character = "&nbsp;";
        break;
      default:
        break;
    }

    return character;
  }

  getCharacterClass(character: string) {
    const charType = this.getCharacterType(character);

    const charClass = this.characterStyles[charType] ?? [];
    const commonClass = ["tw-inline-flex"];
    const countClass = [
      "tw-inline-flex",
      "tw-flex-col",
      "tw-items-center",
      "tw-w-7",
      "tw-py-1",
      "odd:tw-bg-secondary-100",
    ];

    if (this.showCount) {
      return charClass.concat(...commonClass, ...countClass);
    }

    return charClass.concat(commonClass);
  }

  private getCharacterType(character: string): CharacterTypes {
    if (character.match(Utils.regexpEmojiPresentation)) {
      return "emoji";
    }

    if (character.match(/\d/)) {
      return "number";
    }

    const specials = ["&", "<", ">", " "];
    if (specials.includes(character) || character.match(/[^\w ]/)) {
      return "special";
    }

    return "letter";
  }
}
