import { AlpineComponent } from "alpinejs";

type CounterDataOutput = {
  count: number;
  change: (
    this: AlpineComponent<CounterDataOutput> & {
      $event: { target: { value: string } };
    },
    value: number
  ) => void;
  input: Record<
    string,
    (
      this: AlpineComponent<CounterDataOutput> & {
        $event: { target: { value: string }; deltaY: number };
      }
    ) => void
  >;
  display: Record<
    string,
    (
      this: AlpineComponent<CounterDataOutput>
    ) => void
  >;
};

export default function (): AlpineComponent<CounterDataOutput> {
    return {
      init() {
        console.log("counter init");
      },
      count: 0,
      change(value: number) {
        this.count = value;
      },
      input: {
        [":value"]() {
          return this.count;
        },
        ["@input"]() {
          this.change(Number(this.$event.target.value));
        },
        ["@wheel.passive"]() {
          this.change(this.count + this.$event.deltaY);
        },
      },
      display: {
        ["x-text"]() {
          return `Count is ${this.count}`;
        }
      }
    };
}
