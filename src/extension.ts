import * as path from 'path';
import { workspace, ExtensionContext } from 'vscode';
import {
    LanguageClient,
    LanguageClientOptions,
    ServerOptions,
    Executable
} from 'vscode-languageclient/node';

import * as fs from 'fs';
import * as os from 'os';

let client: LanguageClient;

export function activate(context: ExtensionContext) {
    let commandTarget = 'eq';
    
    const config = workspace.getConfiguration('equis');
    const customPath = config.get<string>('executablePath');
    
    if (customPath && customPath.trim() !== "") {
        commandTarget = customPath;
    } else {
        const homeDir = os.homedir();
        const defaultUnixPath = path.join(homeDir, '.equis', 'bin', 'eq');
        const defaultWinPath = path.join(homeDir, '.equis', 'bin', 'eq.bat');

        if (fs.existsSync(defaultUnixPath)) {
            commandTarget = defaultUnixPath;
        } else if (fs.existsSync(defaultWinPath)) {
            commandTarget = defaultWinPath;
        }
    }

    const serverExecutable: Executable = {
        command: commandTarget,
        args: ['lsp'],
        options: {
            shell: true 
        }
    };

    const serverOptions: ServerOptions = {
        run: serverExecutable,
        debug: serverExecutable
    };

    const clientOptions: LanguageClientOptions = {
        documentSelector: [{ scheme: 'file', language: 'equis' }],
        synchronize: {
            fileEvents: workspace.createFileSystemWatcher('**/*.equis')
        }
    };

    client = new LanguageClient(
        'equisLanguageServer',
        'Equis Language Server',
        serverOptions,
        clientOptions
    );

    client.start();
}

export function deactivate(): Thenable<void> | undefined {
    if (!client) {
        return undefined;
    }
    return client.stop();
}
