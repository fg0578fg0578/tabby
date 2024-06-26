use tabby_scheduler::DocIndexer;
use tabby_schema::Result;
use tracing::debug;

use super::helper::Job;

pub struct DeleteIndexedDocumentsJob {
    source: String,
}

impl DeleteIndexedDocumentsJob {
    pub fn new(source: String) -> Self {
        Self { source }
    }

    pub async fn run(self) -> Result<()> {
        debug!("Deleting documents for {}", self.source);
        let index = DocIndexer::new_no_embedding();
        index.delete(&self.source).await;
        index.commit();
        Ok(())
    }
}

impl Job for DeleteIndexedDocumentsJob {
    const NAME: &'static str = "delete_indexed_documents";
}
