import type { Portfolio } from "../entities/Portfolio";

export interface PortfolioRepository {
    getPortfolio: () => Portfolio;
}
