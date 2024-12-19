import { Engine } from 'json-rules-engine';

export abstract class RuleEngineBase {
  protected engine: Engine;

  constructor() {
    this.engine = new Engine();
    this.loadRules();
  }

  protected abstract loadRules(): void;

  abstract extractFacts(query: Record<string, any>): Record<string, any>;

  // Run the engine with extracted facts
  async evaluate(query: Record<string, any>) {
    const facts = this.extractFacts(query);

    console.log(
      `Evaluating ${this.constructor.name} with facts:`,
      JSON.stringify(facts, null, 2),
    );

    const results = await this.engine.run(facts);
    return results.events.map((event) => ({
      type: event.type,
      value: event.params.value,
    }));
  }
}
