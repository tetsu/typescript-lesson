import { MatchReader, MatchRecord } from './Match';
import { Summary } from './Summary';

const matchReader = MatchReader.fromCsv('football.csv');
const summary = Summary.winsAnalysisWithHtmlReport('Man United');
const summary2 = Summary.winsAnalysisWithConsoleReport('Man United');

matchReader.load();
summary.buildAndReportSummary(matchReader.matches);
summary2.buildAndReportSummary(matchReader.matches);
