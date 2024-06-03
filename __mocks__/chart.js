import { vi } from "vitest";

export default {
    Chart: class {
        constructor(ctx, config) {
            this.ctx = ctx;
            this.config = config;
            this.destroy = vi.fn();
            this.update = vi.fn();
            this.render = vi.fn();
            this.resize = vi.fn();
            this.stop = vi.fn();
            this.clear = vi.fn();
            this.toBase64Image = vi.fn();
            this.generateLegend = vi.fn();
            this.getDatasetMeta = vi.fn();
            this.reset = vi.fn();
        }
    }
};
