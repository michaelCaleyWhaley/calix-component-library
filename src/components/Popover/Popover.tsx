import "./Popover.scss";

import { Cross2Icon, MixerHorizontalIcon } from "@radix-ui/react-icons";
import * as RadixPopover from "@radix-ui/react-popover";

function Popover({ children }: { children: JSX.Element }) {
  return (
    <RadixPopover.Root>
      <RadixPopover.Trigger asChild>
        <button className="icon-button" aria-label="Update dimensions">
          <MixerHorizontalIcon />
        </button>
      </RadixPopover.Trigger>
      <RadixPopover.Portal>
        <RadixPopover.Content className="popover-content" sideOffset={5}>
          {children}
          <RadixPopover.Close className="popover-close" aria-label="Close">
            <Cross2Icon />
          </RadixPopover.Close>
          <RadixPopover.Arrow className="popover-arrow" />
        </RadixPopover.Content>
      </RadixPopover.Portal>
    </RadixPopover.Root>
  );
}

export { Popover };
